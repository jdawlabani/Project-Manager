import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleProduct = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/producs/${id}`)
        .then((res) => {
            setProduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )

}

export default SingleProduct