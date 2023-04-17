import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const BodyOilsPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter((product) => product.category === 'Body Oil')
        .map((product) => (
          <ProductCard
          product={product} />
        ))}
    </div>
  );
};

export default BodyOilsPage;
