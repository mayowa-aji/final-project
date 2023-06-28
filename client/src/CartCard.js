
// import { useContext } from 'react';
// import { useNavigate } from "react-router-dom"
// import { CartContext } from './contexts/CartContext';

// const CartCard = ({ product, onDelete, id, addToCart }) => {

//     const navigate = useNavigate();
//     const { cartState, cartDispatch } = useContext(CartContext);

//     const handleDelete = () => {
//       console.log(id);
//       // onDelete(id);

//     }

//     const handleAdd = () => {
//         // addToCart(product)
//         cartDispatch({ type: "add_to_cart", product: product})
//     }
//     return (
//         <div>
//             <img alt={product.product_name} src={product.image_url} />
//             <h6>{product.product_name}</h6>
//             <h6>$ {product.price}</h6>
//             <div>{product.quantity}</div>
//             <button  onClick={handleAdd}>add</button>
//             <button  onClick={handleDelete}>Remove</button>
//         </div>
//     )
// }

// export default CartCard;
