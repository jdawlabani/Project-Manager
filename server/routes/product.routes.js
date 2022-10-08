const ProductController = require('../controllers/product.controller')
const {createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct} = ProductController

module.exports = (app) => {
    app.post('/api/newProduct', createProduct)
    app.get('/api/products', getAllProducts)
    app.get('/api/products/:_id', getOneProduct)
    app.put('/api/products/:_id', updateProduct)
    app.delete('/api/products/:_id', deleteProduct)

}

