import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';

import React, { useContext } from 'react';

const ShopAll = () => {
  const { products, setProducts } = useContext(ProductContext);

  console.log(products);
  return (
    <>
      <h3
        style={{
          textAlign: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '1.5rem',
        }}>
        Shop our best selling soaps
      </h3>
      <div className="d-flex justify-content-center">
        <div className="row center-mobile">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                imageUrl={product.image_url}
                name={product.product_name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <CustomBtn text="Shop Now" />
      </div>
    </>
  );
};

export default ShopAll;
