import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import { Card, Button } from 'react-bootstrap';
import '../styles/productInfo.css';
import { CustomerContext } from '../contexts/CustomerContext';

const CartCard = ({ product, onDelete, id, addToCart }) => {
  const { deleteCart, patchCart, addCart, fetchCart} = useContext(CartContext);

  const { customer} = useContext(CustomerContext)

  const handleDelete = () => {
    console.log(product, "FROM HANDLE DELETE!!!!!!!!!")
    if(product.quantity === 1) {
      deleteCart(product,product.product.product_id, customer.customer_id)
    } else {
      product.quantity -=1
      patchCart(product,product.product.product_id,customer.customer_id)
    }
    // cartDispatch({ type: 'remove_from_cart', product });
    fetchCart(customer.customer_id)
  };

  const handleAdd = () =>
  {
    addCart(product, customer.customer_id)
    fetchCart(customer.customer_id)
    // cartDispatch({ type: 'add_to_cart', product });
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
