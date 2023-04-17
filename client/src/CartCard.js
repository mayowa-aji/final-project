
import { useNavigate } from "react-router-dom"

const CartCard = ({ product, onDelete, id, addToCart }) => {

    const navigate = useNavigate();

    const handleDelete = () => {
        console.log(id)
        onDelete(id);
    }

    const handleAdd = () => {
        addToCart(product)
    }
    return (
        <div>
            <img alt={product.product_name} src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
            <div>{product.quantity}</div>
            <button  onClick={handleAdd}>add</button>
            <button  onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default CartCard;
