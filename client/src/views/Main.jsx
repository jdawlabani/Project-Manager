import ProductForm from "../Components/ProductForm"
import ProductList from "../Components/ProductList"
import { useState } from "react"

const Main = (props) => {
    const [product, setProduct] = useState([])

    return (
        <div>
            <ProductForm product = {product} setProduct = {setProduct} />
            <hr />
            <ProductList product = {product} setProduct = {setProduct} />
        </div>
    )

}
export default Main
