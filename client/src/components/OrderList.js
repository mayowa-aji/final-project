import { useContext, useEffect } from 'react';
import { CustomerContext } from '../contexts/CustomerContext';
import OrderCard from './OrderCard';
import { OrderContext } from '../contexts/OrderContext';

const OrderList = () => {
  const { customer } = useContext(CustomerContext);
  const { orders } = useContext(OrderContext);

  useEffect(() => {
    console.log(orders);
  }, []);
  return (
    <div>
      {orders &&
        orders.map((order) => <OrderCard key={order.order_id} order={order} />)}
    </div>
  );
};

export default OrderList;
