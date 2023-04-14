import React from 'react';
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

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/shop-soaps" element={<SoapViewer />} />
        <Route path="/shop-body-butter" element={<BodyButterPage />} />
        <Route path="/shop-body-oil" element={<BodyOilsPage />} />
        <Route path="/shop-men" element={<MensPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<h3>404 Page not found</h3>} />
      </Routes>
      <Login/>
      <Register/>
      <Footer />
    </>
  );
}
export default App;

