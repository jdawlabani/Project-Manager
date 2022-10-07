import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const ProductList = (props) => {

    const {product, setProduct} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
        console.log(res.data)
        setProduct(res.data)
        })
    }, [product])
    
    return(
        <div>
        <h1>All Products:</h1>
        {
        product.map((p, index) => (
        <div key={index}>
            <Link to={`/product/${p._id}`}>
                {p.title}
            </Link>
        </div>
        ))
        }
        </div>
    )

}

export default ProductList