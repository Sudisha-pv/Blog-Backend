//backend creation using experss
//1 load .env file
require('dotenv').config()// load .env file content into process .env by default


//2 import express
const express = require('express')

//6 import cors
const cors = require('cors')

//8 import db
const db=require('./DB/connection')

const router=require('./Routes/router')

// 3 create an applocation using express
const serverApp = express()

//7 middleware configuration
serverApp.use(cors())
serverApp.use(express.json())
serverApp.use(router)

//export image to frontend
serverApp.use('/uploads',express.static('./uploads'))

//4 port creation
const PORT = 3000 || process.env.PORT

//5 server run
serverApp.listen(PORT,()=>{
  console.log("server app ruuning on port" +PORT);
  
})

serverApp.get('/',(req,res)=>{
  res.send("welcome to severApp")
})



// const posts=[
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   }
// ]

// serverApp.get('/api/posts',(req,res)=>{
//   res.status(200).json(posts)
// })

// //post 

// serverApp.post('/api/posts',(req,res)=>{
//    const reqBody={
//     userId:req.body.userId,
//     id: req.body.id,
//     title: req.body.title,
//     body:req.body.body,
//    }

//    posts.push(reqBody)
//    res.status(200).json(posts)
// })

// //put
// serverApp.put('/api/posts/:id',(req,res)=>{
//    const index=posts.findIndex(item=>item.id==req.params.id)
//    if(index==-1){
//     res.status(401).json("not found")
//    }
//    else{
//     posts[index].userId=req.body.userId,
//     posts[index].id=req.body.id,
//     posts[index].title=req.body.title,
//     posts[index].body=req.body.body
//     res.status(200).json(posts)
//    }
// })


// //delete
// serverApp.delete('/api/posts/:id',(req,res)=>{
//   userId=req.params.id;
//   const deleteId=posts.find(item=>item.id==userId)
//   if(!deleteId){
//     res.status(401).json("item not found")
//   }
//   else{
//     const newArray=posts.filter(item=>item.id!=userId)
//     res.status(200).json(newArray)
//   }
// })