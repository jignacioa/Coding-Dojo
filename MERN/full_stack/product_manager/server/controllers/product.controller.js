const Product = require('../models/product.models')

function index(req, res) {
    res.json({message: 'Hey there!'})
}

function createProduct(req, res) {
  Product.create(req.body)
    .then(createdProduct => res.json(createdProduct))
    .catch(err => res.status(400).json(err))
}

function getProducts(req, res) {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err))
  }

  function oneProduct(req, res) {
      Product.findById(req.params.id) 
        .then(product => res.json(product))
        .catch(err => console.log(err))
  }

  function deleteProduct(req, res) {
    Product.findByIdAndDelete(req.params.id) //findById allows us to pass just the id 
     .then(()=> res.json({status: 'Deleted'}))
     .catch(err => res.json(err))
  }
  
  function editProduct(req, res) {
    Product.findByIdAndUpdate(
      req.params.id, {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      description: req.body.description
    },
    {
      new:true,
      runValidators:true
    })
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.status(400).json(err))
  }   
  

module.exports = {
    index,
    createProduct,
    getProducts,
    oneProduct,
    deleteProduct,
    editProduct
}