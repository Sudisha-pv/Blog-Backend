const mongoose = require('mongoose')

const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register logic
exports.registerAPI= async (req,res)=>{
 console.log("inside register api");
 const {username,email,password}=req.body;
 //if user alreadt exisiting
 const existinUser = await users.findOne({email})
    if(existinUser){
         res.status(402).json({message:"user already exisiting..."})

    }
    else{
      const newUser=new users({
        username:username,
        email:email,
        password:password
      })
      await newUser.save()
      res.status(200).json("registration successfully")
    }

  
}


exports.loginAPI= async (req,res)=>{
  console.log("inside login api");
  const {email,password}=req.body;
  //if user alreadt exisiting
  const existinUser = await users.findOne({email,password})
    try {
      if(existinUser){

        const token=jwt.sign({userId:existinUser._id},process.env.jwtKey)
        console.log(token);
        
        res.status(200).json({currentUser:existinUser,token})
        

   }
   else{
   
     res.status(404).json("incorrect email or password")
   }
      
    } catch (err) {
      res.status(401).json(err)
    }
  
  
 
   
 }