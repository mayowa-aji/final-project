import React, { useContext } from 'react';
import { ProductContext } from '../contexts/productContext';
import ProductCard from './ProductCard';

const SoapViewer = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter((product) => product.category === 'official')
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

export default SoapViewer;
