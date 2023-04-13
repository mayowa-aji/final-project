import React from 'react';
import { Switch, Route } from 'react-router';

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

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
          <HomePage />
      </Route>
      <Route path ="/about">
          <About />
      </Route>
      <Route path ="/ingredients">
        <Ingredients />
      </Route>
      <Route path ="/shop-all">
        <ShopAll />
      </Route>
      <Route path ="/shop-soaps">
        <SoapViewer />
      </Route>
      <Route path ="/shop-body-butter">
        <BodyButterPage/>
      </Route>
      <Route path ="/shop-body-oil">
        <BodyOilsPage />
      </Route>
      <Route path ="/shop-men">
        <MensPage/>
      </Route>
      <Route path ="/contact">
        <Contact />
      </Route>
      <Route path ="/faq">
        <Faq />
      </Route>
      <Route path ="*">
        <h3>404 Page not found</h3>
      </Route>
    </Switch>
    <Footer />
    </>
  );
}
export default App;

