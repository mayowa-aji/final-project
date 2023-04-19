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
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const fetchCart = async (customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart`);
    const cartData = await resp.json();
    console.log(cartData, "CARTCONTEXRTEGFAFE")
    cartDispatch({type: "set_cart", newCart: cartData})
  };

  const addCart = async (product, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  };

  const patchCart = async (product, product_id, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart/${product_id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    console.log(resp.json());
  }

  const deleteCart = async (product, product_id, customer_id) => {
    const resp = await fetch(`/customer/${customer_id}/cart/${product_id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    })
    console.log(resp.json());
  }

    return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartState,
        cartDispatch,
        fetchCart,
        addCart,
        patchCart,
        deleteCart

      }}>
            {props.children}
        </CartContext.Provider>
  );
};
