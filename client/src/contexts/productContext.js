import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((productList) => {
        setProducts(productList);
        console.log(products);
      });
    // .then((err) => alert(err))
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
