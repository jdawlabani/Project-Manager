import {  useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const ProductList = (props) => {

    const {product, setProduct} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
        console.log(res.data)
        setProduct(res.data)
        })
    }, [])
    
    const deleteThisProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(product.filter((p, index) => p._id !== id))
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return(
        <div>
        <h1>All Products:</h1>
        {
        product.map((p, index) => (
        <div key={index}>
            <Link to={`/product/${p._id}`}>
                {p.title}
            </Link>

            <button onClick={() => navigate(`/product/edit/${p._id}`)}>Edit</button>
            <button onClick={() => deleteThisProduct(p._id)}>Delete</button>
        </div>
        ))
        }
        </div>
    )

}

export default ProductList