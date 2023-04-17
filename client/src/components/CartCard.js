import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartCard = ({ product, onDelete, id, addToCart }) => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const handleDelete = () => {
    cartDispatch({ type: 'remove_from_cart', product: product });
  };

  const handleAdd = () => {
    cartDispatch({ type: 'add_to_cart', product: product });
  };
  return (
    <div>
      <img alt="test" src={product.image_url} />
      <h6>{product.product_name}</h6>
      <h6>$ {product.price}</h6>
      <div>{product.quantity}</div>
      <button className onClick={handleAdd}>
        add
      </button>
      <button className onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

export default CartCard;
