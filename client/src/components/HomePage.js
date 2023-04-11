import React from 'react';

import Header from './Header';
import Marquee from './Marquee';
import ProductList from './ProductList';
import Press from './Press';
import BodyButterProductList from './BodyButterProductList';
import About from './About';


const HomePage = () => {
  return (
    <div>
      <Header />
      <Marquee />
      <ProductList />
      <BodyButterProductList />
      <Press />
    </div>
  );
}

export default HomePage;

