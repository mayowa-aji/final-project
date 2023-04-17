import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const MensPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter((product) => product.category === 'Men')
        .map((product) => (
          <ProductCard
          product={product}
        />
        ))}
    </div>
  );
};

export default MensPage;
