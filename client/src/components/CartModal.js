import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Modal } from 'react-bootstrap';
import { CheckoutContext } from '../contexts/CheckoutContext';
import { LoginContext } from '../contexts/LoginContext';
import { CustomerContext } from '../contexts/CustomerContext';
import CartCard from './CartCard';
import '../styles/productInfo.css';

const CartModal = ({ cart, setCart, addToCart }) => {
  const { showCart, setShowCart, cartState, fetchCart } =
    useContext(CartContext);
  const { showCheckout, setShowCheckout } = useContext(CheckoutContext);
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const { customer } = useContext(CustomerContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCart(customer && customer.customer_id);
    console.log(cartState)
  }, [customer]);
  const proceedToCheckout = () => {
    if (customer) {
      setShowCart(false);
      setShowCheckout(true);
    } else {
      setShowCart(false);
      setShowLogin(true);
    }
  };

  useEffect(() => {
    console.log(cartState)
    setTotal(
      cartState &&
        cartState.reduce((acc, curr) => {
          return acc + curr.unit_price * curr.quantity;
        }, 0)
    );
  }, [cartState]);

  return (
    <Modal
      show={showCart}
      onHide={() => setShowCart(false)}
      size="lg"
      aria-labelledby="container-modal-title-vcenter"
      centered>
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title>Your Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartState ?
          cartState.map((product) => (
            <CartCard id={product.product_id} product={product} />
          )) : null}
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn-primary-outline px-3"
          onClick={proceedToCheckout}>
          Proceed to Checkout
        </button>
        <div style={{ width: '1em' }}></div>
        <button
          className="btn-primary-outline px-3"
          onClick={() => setShowCart(false)}>
          Close
        </button>
        <div>Total: ${total && total.toFixed(2)}</div>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
