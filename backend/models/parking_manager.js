const mongoose = require('mongoose')

const ParkingManagerSchema = new mongoose.Schema({
 
    place:String,
    pin:String,
   phnumber:String,
    photo:String,
    name:String,
    

    type: String,
  
  });
  // Create a model from the schema
  const ParkingManager = mongoose.model('parkingmanager', ParkingManagerSchema);
  
  module.exports = ParkingManager;