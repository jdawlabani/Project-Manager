const ProductController = require('../controllers/product.controller')
const {createProduct} = ProductController

module.exports = (app) => {
    app.post('api/newProduct', createProduct)
}

