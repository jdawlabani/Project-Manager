const Product = require('../models/product.model');


const createProduct = (req, res) => {
    Product.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    createProduct
}


