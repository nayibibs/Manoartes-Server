const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const productosBaseSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    materials: String,

  },
  {
    timestamps: true
  }
);
 
module.exports = model("ProductosBase", productosBaseSchema);