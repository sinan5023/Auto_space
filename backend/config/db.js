const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://vishnu9090:Vishnu9090@cluster0.qrn6f0e.mongodb.net/")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))