import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CheckoutContext } from "../contexts/CheckoutContext";
import { Modal } from "react-bootstrap"
import CartModal from "./CartModal";
import CartCard from "./CartCard";


const CheckoutModal = () => {
    const { showCheckout, setShowCheckout } = useContext(CheckoutContext)
    const { showCart, setShowCart, cartState, cartDispatch } = useContext(CartContext)

    const backToCart = () => {
        setShowCheckout(false)
        setShowCart(true)
    }

    // const handleDelete = (id) => {
    //   const existingItem = cart.find(item => item.product_id === id)
    //   if (existingItem.quantity === 1){
    //       setCart(cart.filter(item => item.product_id !== id))
    //   } else {
    //       setCart(cart.map(item => item.product_id === existingItem.product_id? {...existingItem, quantity: existingItem.quantity -1} : item))
    //   }
    // }


    return(
        <Modal show={showCheckout} onHide={() => setShowCheckout(false)} size="lg" aria-labelledby="container-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Checkout</Modal.Title>
                <button onClick={backToCart}>Back to Cart</button>
            </Modal.Header>
            <Modal.Body>
            {cartState && cartState.map(product => <CartCard id={product.product_id} product={product}  />)}            </Modal.Body>
            <Modal.Footer>
                <button>Purchase</button>
                <button onClick={() => setShowCheckout(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal;
