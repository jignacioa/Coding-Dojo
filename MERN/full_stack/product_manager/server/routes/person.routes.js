const ProductCtl = require('../controllers/product.controller')

const {authenticate} = require('../config/jwt.config')
module.exports = app => {
    app.get('/api', ProductCtl.index)
    app.post('/api/products', ProductCtl.createProduct)
    app.get('/api/products', authenticate, ProductCtl.getProducts)
    app.get('/api/products/:id', ProductCtl.oneProduct)
    app.delete('/api/products/:id', ProductCtl.deleteProduct)
    app.put('/api/products/:id', ProductCtl.editProduct)
}