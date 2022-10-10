const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const ProductosBase = require("../models/ProductosBase.model");

const fileUploader = require("../config/cloudinary.config");

//Routs for all products
router.get("/productosbase", (req,res) =>{
    ProductosBase.find()
    .then(productos =>{
        res.json(productos)
    })
    .catch(err => res.json(err));
})

router.post("/productosbase/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file)

 if (!req.file) {
   next(new Error("No file uploaded!"));
   return;
 }
 
 // Get the URL of the uploaded file and send it as a response.
 // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
 
 res.json({ fileUrl: req.file.path });
});

// POST '/api/productosbase'
//http://localhost:5005/api/productosbase
// route for create new product


router.post('/productosbase', (req, res) => {
    console.log(req)
    const { title, description, imageUrl, price, materials } = req.body;
    
    ProductosBase.create({ title, description, imageUrl,price, materials})
      .then(productoCreado => res.json(productoCreado))
      .catch(err => res.json(err));
  });

 // GET /api/productosbase/:productosBaseId -> to get the product id
  router.get('/productosbase/:productoId', (req, res) => {
    const { productoId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(productoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   });  

   // PUT  /api/productosbase/:productoId  -  Updates a specific product by id
router.put('/productosbase/:productoId', (req, res) => {
    const { productoId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(productoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    ProductosBase.findByIdAndUpdate(productoId, req.body, { new: true })
      .then((updatedProduct) => res.json(updatedProduct))
      .catch(error => res.json(error));
  });

  // DELETE  /api/productosbase/:productoId  -  Deletes a specific product by id
router.delete('/productosbase/:productoId', (req, res) => {
    const { productoId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(productoId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    ProductosBase.findByIdAndRemove(productoId)
      .then(() => res.json({ message: `Producto con ${productoId} es eliminado exitosamente.` }))
      .catch(error => res.json(error));
  });
   
   
module.exports = router;