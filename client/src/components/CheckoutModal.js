import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CheckoutContext } from "../contexts/CheckoutContext";
import { Modal } from "react-bootstrap"
import CartModal from "./CartModal";
import CartCard from "./CartCard";
import '../styles/productInfo.css';


const CheckoutModal = () => {
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)
    const { showCart, setShowCart, cartState, cartDispatch } = useContext(CartContext)

    const backToCart = () => {
        setShowCheckout(false)
        setShowCart(true)
    }

    return(
        <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Checkout</Modal.Title>
                <button  className='btn-primary-outline px-3'  onClick={backToCart}>Back to Cart</button>
            </Modal.Header>
            <Modal.Body>
            {cartState && cartState.map(product => <CartCard id={product.product_id} product={product}  />)}</Modal.Body>
            <Modal.Footer>
                <button className='btn-primary-outline px-3' >Purchase</button>
                <button  className='btn-primary-outline px-3'  onClick={() => setShowCheckout(false)}>Close</button>
                </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal;
