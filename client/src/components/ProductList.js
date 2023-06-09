import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';

import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';
import '../styles/productCard.css';
import '../styles/productList.css';

const ProductList = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { searchField, setSearchField } = useContext(SearchContext);

  const searchedResults = products.filter((product) =>
    product.product_name.toLowerCase().match(searchField.toLowerCase())
  );

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
      <div className="text-center">
        <Link to="/shop-soaps">
          <CustomBtn text="Shop Soaps" />
        </Link>
      </div>
      <h3
        style={{
          textAlign: 'center',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}>
        Shop our best selling Body Butters
      </h3>
      <div className="d-flex justify-content-center">
        <div className="row center-mobile">
          {products && products
            .filter((product) => product.category === 'Body Butter')
            .slice(0, 3)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </div>
      <div className="text-center" style={{ paddingBottom: '4rem' }}>
        <Link to="/shop-body-butter">
          <CustomBtn text="Shop Body Butters" />
        </Link>
      </div>
    </>
  );
};

export default ProductList;
