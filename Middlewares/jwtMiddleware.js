const jwt =require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
  console.log("inside jwtmiddlware");

  try {
    const token=req.headers['authorization'].slice(7)
    console.log(token);
    if(token){
       jwtVerification=jwt.verify(token,process.env.jwtKey)
      console.log(jwtVerification);
      next();
      
    }
    else{
      res.status(404).json("please provide the token")
    }
    
 
  } catch (error) {
    res.status(401).json("please login")
  }


  
}

module.exports=jwtMiddleware