const mongoose = require('mongoose');

// Define a schema for your data
const ValetSchema = new mongoose.Schema({
 
  username: String,
  password: String,
  name: String,
  place: String,
  id_proof: String,
  Photo: String,
  type: String,
  photo : String,

});
// Create a model from the schema
const Valet = mongoose.model('login', loginSchema);

module.exports = Valet;