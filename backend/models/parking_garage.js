const mongoose = require('mongoose');

// Define a schema for your data
const ParkingGarageSchema = new mongoose.Schema({
 
   name: String,
   starrating: String,
   subject: String,
   description: String,


});
// Create a model from the schema
const ParkingGarage = mongoose.model('parkinggarage', ParkingGarageSchema);

module.exports = ParkingGarage;