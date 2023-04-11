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

