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
            key={product.id}
            name={product.name}
            imageUrl={product.image_url}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default BodyButterPage;
