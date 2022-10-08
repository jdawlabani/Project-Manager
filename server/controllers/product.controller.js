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
    Product.findOne({_id: req.params.id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const updateProduct = (req,res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatedProduct) => {
        res.json(updateProduct)
    }).catch((err) => {
        console.log(err)
    })
}
const deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deleted) => {
        res.json(deleted)
    }).catch((err) => {
        console.log(err)
    })
}



module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}


