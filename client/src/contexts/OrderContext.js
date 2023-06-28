import React, { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext({
  showOrder: null,
  setShowOrder: () => {},
  orders: [],
  setOrders: () => {},
});

export const OrderProvider = (props) => {
  const [showOrder, setShowOrder] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const resp = await fetch('/orders');
      const orderList = await resp.json();
      setOrders(orderList);
    };
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{ showOrder, setShowOrder, orders, setOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};
