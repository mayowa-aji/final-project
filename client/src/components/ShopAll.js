import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';
import React, { useContext } from 'react';

const ShopAll = () => {
  const { products, setProducts } = useContext(ProductContext);

  return (
    <>
      <h3
        style={{
          textAlign: 'center',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}>
        Shop our best selling soaps
      </h3>
      <div className="d-flex justify-content-center">
        <div className="row center-mobile" >
          {products.map((product) => (
            <div style={{paddingRight:'10rem', paddingLeft:'10rem'}} className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div style={{paddingTop:'1rem',  paddingBottom:'3rem'}}className="text-center">
        <CustomBtn text="Shop Now" />
      </div>
    </>
  );
};

export default ShopAll;
