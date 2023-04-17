import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const SoapViewer = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter((product) => product.category === 'Soap')
        .map((product) => (
          <ProductCard
          product={product}
        />
        ))}
    </div>
  );
};

export default SoapViewer;
