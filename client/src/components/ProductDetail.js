import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductInfo from "../components/ProductInfo";

import '../styles/productDetail.css'

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
            <ProductInfo  product={product} cart={cart} setCart={setCart} addToCart={addToCart}/>
            <p className="product-details-paragraph">{product.description}</p>
        </div>
    )
}

export default ProductPage;
