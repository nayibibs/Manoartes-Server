const mongoose = require("mongoose");
const { Schema, model } = mongoose;


 
const productosBaseSchema = new Schema(
  {
    title: { 
      type: String,
      required: true

    },

    description :{
      type: String,
      required: true
    }, 

    price:{
      type: Number,
      required: true
    },
    imageUrl:{
      type: String,
      
    },
      materials:{
        type: String,
        required: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]

  }
  
  
  
);
 
module.exports = model("ProductosBase", productosBaseSchema);