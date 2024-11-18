const mongoose = require('mongoose');

// Define a schema for your data
const UserSchema = new mongoose.Schema({
 
  name : String,
  photo : String,
  phnumber: String,
  username: String,
  password: String,
  type: String,

});
// Create a model from the schema
const User = mongoose.model('user', UserSchema);

module.exports = User;