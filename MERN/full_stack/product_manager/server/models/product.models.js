const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String, 
        required: [true, 'Product name is required']
    },
    productPrice: {
        type: Number,
        required: [true, 'Product price is required']
    },
    description: {
        type: String,
        required: [true, 'Please add a product description']
    }
}, {timestamps: true})

const Product = mongoose.model('product', ProductSchema);
module.exports = Product 