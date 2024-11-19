const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const { MongoClient } = require('mongodb');
const db = require('./config/db')
const Login = require('./models/login')
const parkingmanager = require('./models/parking_manager')
const fs = require('fs');
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/login',async (req,res) =>{
  try{
      console.log("%%%ooooooooo%%%%",req.body)
  const{ username,password }=req.body
  const log=await Login.find({username:username,password:password});
  if (log.length>0){
          res.json({status: true,message:"Success","uid":log[0]._id,type:log[0].type})

      }
      else{
          res.json({status: false})

      }

       
 

  
}
catch (e){
  console.log("======",e)
  res.json({status: false})
}
})
app.post('/Parking_Manager',async (req,res) => {
  try{
      console.log("%%%%%%%%%%%%%%%%%%",req.body)
    
  const{ username,password,place,pin,phonenumber,name,photo}=req.body

  const log=Login({
    username:username,
    password:password,
    type:"parking_manager"
});
log.save();
   const reg = parkingmanager({
     name:name,
     place:place,
    pin:pin,
   phnumber:phonenumber,
    photo:photo,

   }).save()
  


  res.json({status: true,message:"Success"})
}
catch (e){
  console.log("======",e)

}})
