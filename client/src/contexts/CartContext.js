import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useParams } from 'react-router';
import cartReducer from '../reducers/cartReducer';
import { CustomerContext } from './CustomerContext';

export const CartContext = createContext({
    showCart: null,
    setShowCart: () => {},
    cartState: [],
    cartReducer: () => {},
});

export const CartProvider = (props) => {
    const [showCart, setShowCart] = useState(false);
    const [cartState, setCartState] = useState([])

  const fetchCart = async (customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart`);
    const cartData = await resp.json();
    console.log(cartData, "CARTCONTEXRTEGFAFE")
    setCartState(cartData)
  };

  const addCart = async (product, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    const cartData = await resp.json()
    setCartState(cartData)
  };

  const patchCart = async (product, product_id, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart/${product_id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    const cartData = await resp.json()
    console.log(cartData);
    setCartState(cartData)
  }

  const deleteCart = async (product_id, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart/${product_id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    })
    const cartData = await resp.json()
    setCartState(cartData)

  }

    return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartState,
        setCartState,
        fetchCart,
        addCart,
        patchCart,
        deleteCart

      }}>
            {props.children}
        </CartContext.Provider>
  );
};
