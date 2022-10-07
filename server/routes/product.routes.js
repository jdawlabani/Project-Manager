const ProductController = require('../controllers/product.controller')
const {createProduct, getAllProducts, getOneProduct} = ProductController

module.exports = (app) => {
    app.post('/api/newProduct', createProduct)
    app.get('/api/products', getAllProducts)
    app.get('/api/producs/:_id', getOneProduct)
}

