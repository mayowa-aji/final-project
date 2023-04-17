import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const BodyOilsPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="d-flex justify-content-center" style={{paddingTop:'5rem', paddingBottom:'5rem'}}>
    <div style={{paddingRight:'18rem', paddingLeft:'18rem'}}className="row center-mobile justify-content-center">
    {products
      .filter((product) => product.category === 'Body Oil')
      .map((product) => (
        <ProductCard
        product={product}
      />
      ))}
  </div>
  </div>
  );
};

export default BodyOilsPage;
