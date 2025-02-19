//import mongoose
const mongoose = require('mongoose')

//create connenction string
const connectionString= process.env.connectionString

//define conection
mongoose.connect(connectionString).then(res=>{
  console.log("serevr connected with mongoDB");
  
}).catch(err=>{
  console.log("error",+err);
  
})