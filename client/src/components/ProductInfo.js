const ProductInfo = ({ product, setCart, cart, addToCart }) => {
    function handleAdd(){
        addToCart(product)
    }

    return(
        <div>
            <img alt={product.name} src={product.image_url} />
            <div>
                <h3>{product.product_name}</h3>
                <h3>${product.price}</h3>
                <button onClick={handleAdd}>ADD TO BASKET</button>

            </div>
        </div>
    )
}

export default ProductInfo
