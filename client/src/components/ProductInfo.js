
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import CustomBtn from './CustomBtn';
import '../styles/productInfo.css';
import { CustomerContext } from '../contexts/CustomerContext';

const ProductInfo = ({ product }) => {
  const { cartState, cartDispatch, setShowCart, addCart } =
    useContext(CartContext);

  const { customer } = useContext(CustomerContext);
  function handleAdd() {
    console.log(product, 'frpm productinfo');
    cartDispatch({ type: 'add_to_cart', product });
    addCart(product, customer.customer_id);
    setShowCart(true);
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <img
            src={product.image_url}
            alt={product.product_name}
            className="product-image"
          />
        </Col>
        <Col md={8} className="py-5">
          <h3>{product.product_name}</h3>
          <p>${product.price}</p>
          <Button className="btn-primary-outline" onClick={handleAdd}>
            ADD TO CART
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductInfo;
