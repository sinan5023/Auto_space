const mongoose = require('mongoose');

// Define a schema for your data
const ComplaintSchema = new mongoose.Schema({
 
  subject: String,
  description: String,
  photo : String,
  boikong: String,
  
  

});
// Create a model from the schema
const Complaint = mongoose.model('complaint', ComplaintSchema);

module.exports = Complaint;