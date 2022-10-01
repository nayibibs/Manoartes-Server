const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const artesaniaSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);
 
module.exports = model("Artesania", artesaniaSchema);