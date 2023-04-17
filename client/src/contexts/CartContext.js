import React, { createContext, useReducer, useState } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext({
    showCart: null,
    setShowCart: () => {},
    cartState: [],
    cartReducer: () => {},
})

export const CartProvider = (props) => {
    const [showCart, setShowCart] = useState(false);
    const [cartState, cartDispatch] = useReducer(cartReducer, [])


    return (
        <CartContext.Provider value={{ showCart, setShowCart, cartState, cartDispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}
