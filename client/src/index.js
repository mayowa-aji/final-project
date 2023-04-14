import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { LoginProvider } from './contexts/LoginContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { CustomerContext, CustomerProvider } from './contexts/CustomerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoginProvider>
      <RegisterProvider>
        <ProductProvider>
          <CustomerProvider>
            <App />
          </CustomerProvider>
        </ProductProvider>
      </RegisterProvider>
    </LoginProvider>
  </BrowserRouter>
);

