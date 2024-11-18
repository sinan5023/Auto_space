const mongoose = require('mongoose');

// Define a schema for your data
const SlotSchema = new mongoose.Schema({
   
    parkinggarage: String,
    slotno: String,
    floor : String,
    status : Boolean, 
  

});
// Create a model from the schema
const Slot = mongoose.model('slot', SlotSchema);

module.exports = Slot;