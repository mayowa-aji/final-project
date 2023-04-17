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
          product_id={product.product_id}
          image_url={product.image_url}
          name={product.name}
          price={product.price}
        />
        ))}
    </div>
  );
};

export default BodyOilsPage;