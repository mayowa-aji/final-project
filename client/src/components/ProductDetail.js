import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductInfo from "../components/ProductInfo";

const ProductPage = ({ cart, setCart, addToCart }) => {
    const { product_id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`/products/${product_id}`)
            .then((res) => (res.json()))
            .then((productData) => (setProduct(productData)))
            .then((err) => console.log(err))
    },[])
    return(
        <div>
            <ProductInfo product={product}/>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductPage;