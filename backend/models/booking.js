const mongoose = require('mongoose');

// Define a schema for your data
const UserSchema = new mongoose.Schema({
 
  slotno: String,
  startingtime: String,
  endingtime: String,
  carnumber: String,
  valetstatus: Boolean ,
  
  
  

});
// Create a model from the schema
const User = mongoose.model('user', UserSchema);

module.exports = User;