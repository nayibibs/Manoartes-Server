const router = require("express").Router();
const mongoose = require('mongoose');

const ProductosBase = require('../models/ProductosBase.model');
const Comments = require('../models/Comments.model');

router.post('/productosbase/:productoId/comments', (req, res) => {
  const { name, description, productoId } = req.body;

  Comments.create({ name, description})
    .then(newComments => {
      return ProductosBase.findByIdAndUpdate(productoId, { $push: { comments: newComments._id } }, {new: true} );
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});


module.exports = router;