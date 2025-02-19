const { response } = require('express');
const blogs=require('../Models/blogSchema')

exports.addBlogAPI=async(req,res)=>{
  console.log("inside add blog api");

  const {blogName,blogger,website,review}=req.body
  const blogImg=req.file.filename //from multer middleware
  const userId=req.payload//from jwt middleware
  console.log(blogImg);

  console.log(blogName,blogger,website,review,blogImg,userId);
  
  

  try{
    const blog = await blogs.findOne({website})
    if(blog){
      res.status(401).json("project already existing")
    }
    else{
      const newBlog = new blogs({blogName,blogger,website,review,blogImg,userId})
      await newBlog.save()
      res.status(200).json(newBlog)
    }
  }
  catch(err){
    res.status(406).json({ message: "Error", error: err.message });
  }
  
}

exports.getHomeBlog = async(req,res)=>{
  try{
      const response = await blogs.find().limit(3)//3 project needed
      res.status(200).json(response)

  } catch(err){
      res.status(406).json(err)
  } 
    

}


exports.getAUserBlog= async(req,res)=>{
  const userId = req.payload
  try{
     const response = await blogs.find({userId})
     res.status(200).json(response)

 } catch(err){
     res.status(406).json(err)
 } 

}

exports.getAllUserBlog= async(req,res)=>{
  const searchKey=req.query.search
  console.log(searchKey);
  

  const query={
      blogName:{
        $regex:searchKey,
        $options:"i"
      }
  }
  try{
      const response = await blogs.find(query)
      res.status(200).json(response)

  } catch(err){
      res.status(406).json(err)
  } 

}





exports.editBlogAPI=async(req,res)=>{
  console.log("inside edit blog api");

  const {blogName,blogger,website,review,blogImg}=req.body
  const updateImg= req.file? req.file.filename : blogImg //from multer middleware
  const userId=req.payload//from jwt middleware
  const {blogId}=req.params
  console.log(updateImg);

  console.log(blogName,blogger,website,review,blogImg,userId);
  
  try{
    const blog = await blogs.findByIdAndUpdate(
      {_id:blogId},
      {
        blogName:blogName,
        blogger:blogger,
        website:website,
        review:review,
        blogImg:updateImg,
        }
      
    )
await blog.save()
res.status(200).json(blog)
    
     
  }
  catch(err){
    res.status(406).json({ message: "Error", error: err.message });
  }
  
}


exports.deleteBlogAPI=async(req,res)=>{
  console.log("inside delete API");
  const {blogId}=req.params
  try{
    const blog=await blogs.findByIdAndDelete({_id:blogId})
    res.status(200).json(blog)
  }
  catch(err){
    res.status(406).json(err)
  }
  
}






