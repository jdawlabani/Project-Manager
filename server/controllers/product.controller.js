const Product = require('../models/product.model');


const createProduct = (req, res) => {
    Product.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const getAllProducts = (req, res) => {
    Product.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const getOneProduct = (req,res) => {
    Product.findOne({_id: req.params._id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}


module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct
}


