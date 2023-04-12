import React from 'react';
import ProductCard from './ProductCard';
import CustomBtn from './CustomBtn';
import '../styles/productCard.css'

const ProductList = () => {
  const products = [
    { id: 1, name: 'Charcoal Soap', price: 10.00, imageUrl: 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1427166993792-AV6LQ2ZNZ0XKNBPG7KIY/CharcoalSoap.jpg?format=500w' },
    { id: 2, name: 'Fresh Woodland Soap', price: 10.00, imageUrl: 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223537639-NGJFBOKH8D0JZWVPAUT4/Fire_Soap.jpg?format=500w' },
    { id: 3, name: 'Wild Mint Soap', price: 10.00, imageUrl: 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223671745-RODOMY4W444PL68WZ58E/Mint_Soap.jpg?format=500w?format=500w' },
    ];

  return (
    <>
    <h3 style={{textAlign:'center', paddingTop:'0.5rem', paddingBottom:'1.5rem'}}>Shop our best selling soaps</h3>
    <div className="d-flex justify-content-center">
      <div className="row center-mobile">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard
            imageUrl={product.imageUrl}
            name={product.name}
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

export default ProductList;
