import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { LoginProvider } from './contexts/LoginContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { CustomerProvider } from './contexts/CustomerContext';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';
import { CheckoutProvider} from './contexts/CheckoutContext';
import { CancelConfirmProvider } from './contexts/CancelConfirmContext';
import { CancelProvider } from './contexts/CancelContext';
import { OrderProvider } from './contexts/OrderContext';
import { ViewProvider } from './contexts/ViewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <SearchProvider>
    <LoginProvider>
      <RegisterProvider>
        <ProductProvider>
          <CustomerProvider>
          <CartProvider>
          <CheckoutProvider>
            <CancelConfirmProvider>
              <CancelProvider>
                <OrderProvider>
                  <ViewProvider>
                  <App />
                  </ViewProvider>
                  </OrderProvider>
                </CancelProvider>
                </CancelConfirmProvider>
                </CheckoutProvider>
                </CartProvider>
              </CustomerProvider>
            </ProductProvider>
          </RegisterProvider>
        </LoginProvider>
        </SearchProvider>
      </BrowserRouter>
    );

