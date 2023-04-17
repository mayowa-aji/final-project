import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const BodyButterPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter((product) => product.category === 'Body Butter')
        .map((product) => (
          <ProductCard
          product={product}
        />
        ))}
    </div>
  );
};

export default BodyButterPage;
