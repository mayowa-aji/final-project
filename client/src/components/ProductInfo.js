import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductInfo = ({ product }) => {
  const { cartState, cartDispatch, setShowCart } = useContext(CartContext);
  function handleAdd() {
    cartDispatch({ type: 'add_to_cart', product: product });
    setShowCart(true)
  }

  return (
    <div>
      <img alt={product.name} src={product.image_url} />
      <div>
        <h3>{product.product_name}</h3>
        <h3>${product.price}</h3>
        <button onClick={handleAdd}>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default ProductInfo;
