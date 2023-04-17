import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Modal } from "react-bootstrap"
import { CheckoutContext } from "../contexts/CheckoutContext";
import { LoginContext } from "../contexts/LoginContext";
import { CustomerContext } from "../contexts/CustomerContext";
import CartCard from "./CartCard"


const CartModal = ({cart, setCart, addToCart}) => {
    const { showCart, setShowCart, cartState } = useContext(CartContext)
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)
    const { showLogin, setShowLogin } = useContext(LoginContext)
    const { customer } = useContext(CustomerContext)

    const proceedToCheckout = () => {
        if(customer){
            setShowCart(false)
            setShowCheckout(true)
        } else {
            setShowCart(false)
            setShowLogin(true)
        }

    }

    const totalPrice = cartState && cartState.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity)
    }, 0)

    return(
        <Modal  show={showCart} onHide={() => setShowCart(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartState && cartState.map(product => <CartCard id={product.product_id} product={product} />)}
            </Modal.Body>
            <Modal.Footer>
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
                <button  onClick={() => setShowCart(false)}>Close</button>
                <div>Total: ${totalPrice && totalPrice.toFixed(2)}</div>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal;
