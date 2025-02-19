const mongoose = require('mongoose')

//schema creation
const blogSchema= new mongoose.Schema({
  blogName:{
     type:String,
     required:true
   },
   blogger:{
    type:String,
    required:true
  },
  website:{
    type:String,
    required:true
  },
  review:{
    type:String,
    required:true
  },
  blogImg:{
    type:String,
   
  },
  userId:{
    type:String,
  }


})

//model creation
const blogs= mongoose.model('blogs',blogSchema)
module.exports=blogs