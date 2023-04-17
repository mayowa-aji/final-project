import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';


import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';
import '../styles/productCard.css';
import '../styles/productList.css'


const BestSellers = () => {
  const { products, setProducts } = useContext(ProductContext);

  return (
    <>
    <h3 style={{textAlign:'center', paddingTop:'5rem', paddingBottom:'5rem'}}>Shop our best selling soaps</h3>
    <div className="d-flex justify-content-center">
      <div className="row center-mobile">
      {products
        .filter((product) => product.category === 'Soap').slice(0, 3)
        .map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard product={product}
          />
        </div>
      ))}
      </div>
    </div>
    <div className="text-center">
    <Link to="/shop-soaps">
        <CustomBtn text="Shop Soaps" />
        </Link>
    </div>
    <h3 style={{textAlign:'center', paddingTop:'5rem', paddingBottom:'5rem'}}>Shop our best selling Body Butters</h3>
    <div className="d-flex justify-content-center">
      <div className="row center-mobile">
      {products
        .filter((product) => product.category === 'Body Butter').slice(0, 3)
        .map((product) => (
        <div className="col-md-4 mb-4" >
          <ProductCard product={product}
          />
        </div>
      ))}
      </div>
    </div>
    <div className="text-center" style={{paddingBottom: '4rem'}}>
      <Link to="/shop-body-butter">
        <CustomBtn text="Shop Body Butters" />
        </Link>
    </div>


    </>
  );
};

export default BestSellers;
