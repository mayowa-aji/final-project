import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { LoginProvider } from './contexts/LoginContext';
import { RegisterProvider } from './contexts/RegisterContext';
import {  CustomerProvider } from './contexts/CustomerContext';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';
import { CheckoutProvider} from './contexts/CheckoutContext';

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
            <App />
            </CheckoutProvider>
            </CartProvider>
          </CustomerProvider>
        </ProductProvider>
      </RegisterProvider>
    </LoginProvider>
    </SearchProvider>
  </BrowserRouter>
);

