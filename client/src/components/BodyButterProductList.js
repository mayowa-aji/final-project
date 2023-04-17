import React, {useContext} from 'react';

import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';
import '../styles/productCard.css';

const BodyButterProductList = () => {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <>
    <h3 style={{textAlign:'center', paddingTop:'1.5rem', paddingBottom:'1.5rem'}}>Shop our best selling Body Butters</h3>
    <div className="d-flex justify-content-center">
      <div className="row center-mobile">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
         <ProductCard
            product={product}
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

export default BodyButterProductList;
