import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SingleProduct = (props) => {
    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setSingleProduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [id])
    
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <p>Title: {singleProduct.title}</p>
            <p>Price: {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )

}

export default SingleProduct
