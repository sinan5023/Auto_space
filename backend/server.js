const express = require('express')
const app = express()
const port = 5000
const { MongoClient } = require('mongodb');
const db = require('./config/db')
const Login = require('./models/login')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*app.post('/login',async (req,res) =>{
  try{
      console.log("%%%%%%%%%%%%%%%%%%",req.body)
  const{ username,password }=req.body
  const log=await Login.find({username:username,password:password});
  if (log.length>0){
      const reg=await Registration.find({LOGIN_id:log[0]._id});
      if (reg.length>0){
          res.json({status: true,message:"Success","uid":reg[0]._id,type:log[0].type})

      }
      else{
          res.json({status: false})

      }

       }
  else{
      res.json({status: false})
  }

  
}
catch (e){
  console.log("======",e)
  res.json({status: false})
}
})*/
app.post('/addlogincode',async (req,res) =>{
  try{
      console.log("%%%%%%%%%%%%%%%%%%",req.body)
    
  const{ username,password}=req.body

  const reg= Login({
     username: username,
     password: password,
     type: "admin" 
     }).save()

  res.json({status: true,message:"Success"})
}
catch (e){
  console.log("======",e)

}
})