


const CartCard = ({ product, onDelete, id, addToCart }) => {


    const handleDelete = () => {
        console.log(id)
        onDelete(id);
    }

    const handleAdd = () => {
        addToCart(product)
    }
    return (
        <div>
            <img alt="test" src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
            <div>{product.quantity}</div>
            <button className onClick={handleAdd}>add</button>
            <button className onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default CartCard;
