
import OrderList from "./OrderList";
import OrderModal from "./OrderModal";
import CancelFormModal from "./CancelFormModal";
import CancelConfirmModal from "./CancelConfirmModal";

const OrderPage = () => {

    return(
        <div>
            <h3>Your Orders</h3>
            <OrderList />
            <CancelConfirmModal />
            <CancelFormModal />
            <OrderModal />

        </div>
    )
}

export default OrderPage;
