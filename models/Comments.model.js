const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const commentsSchema = new Schema({
  name: String,
  description:{
    type: String,
    required: true
  } 
 
});
 
module.exports = model('Comments', commentsSchema);