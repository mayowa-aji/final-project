import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import { Card, Button } from 'react-bootstrap';
import '../styles/productInfo.css';

const CartCard = ({ product, onDelete, id, addToCart }) => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const handleDelete = () => {
    cartDispatch({ type: 'remove_from_cart', product: product });
  };

  const handleAdd = () => {
    cartDispatch({ type: 'add_to_cart', product: product });
  };
  return (
    <Card style={{  border: 'none' }}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <Card.Img src={product.image_url} alt={product.product_name} />
      </div>
      <div className="col-md-8">
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>
            Price: ${product.price}<br />
            Quantity: {product.quantity}
          </Card.Text>
          <div className="d-flex ">
            <Button className='btn-primary-outline' onClick={handleAdd}>Add to Cart</Button>
            <div style={{ width: '0.5rem' }}></div>
            <Button className='btn-primary-outline' onClick={handleDelete}>Remove from Cart</Button>
          </div>
        </Card.Body>
      </div>
    </div>
  </Card>


  );
};

export default CartCard;
