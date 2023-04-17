import React, {useContext, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage';
import About from './components/About';
import Ingredients from './components/Ingredients'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faq from './components/Faq';
import ShopAll from './components/ShopAll';
import SoapViewer from './components/SoapViewer';
import BodyButterPage from './components/BodyButterPage';
import BodyOilsPage from './components/BodyOilsPage';
import MensPage from './components/MensPage';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import { CartContext } from './contexts/CartContext';

const App = () => {
  const [cart, setCart] = useState([])
  const { showCart, setShowCart } = useContext(CartContext)
  function addToCart(product) {
    const existingItem = cart.find((item) => item.product_id === product.product_id)
      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.product_id === existingItem.product_id
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      setShowCart(true)
    }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/shop/:product_id" element={<ProductDetail  setCart={setCart} addToCart={addToCart}/>}/>

        <Route path="/shop-soaps" element={<SoapViewer />} />
        <Route path="/shop-body-butter" element={<BodyButterPage />} />
        <Route path="/shop-body-oil" element={<BodyOilsPage />} />
        <Route path="/shop-men" element={<MensPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="*" element={<h3>404 Page not found</h3>} />
      </Routes>
      <Login/>
      <Register/>
      <CartModal cart={cart} setCart={setCart} addToCart={addToCart}/>
      <CheckoutModal />
      <Footer />
    </>
  );
}
export default App;

