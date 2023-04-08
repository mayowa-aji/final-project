import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product A', price: 10.99, imageName: 'CharcoalSoap.jpg' },
    { id: 2, name: 'Product B', price: 19.99, imageName: 'fresh-woodlands-soap.jpeg' },
    { id: 3, name: 'Product C', price: 5.99, imageName: 'lavender_soap.jpeg' },
  ];

  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard
            imageName={product.imageName}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;
