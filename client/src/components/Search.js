
import React, { useContext, useEffect, useState} from 'react';
import { SearchContext } from "../contexts/SearchContext"
import { Form, FormControl, Button } from 'react-bootstrap';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const Search = () => {
  const { setSearchField, searchField, searchResults, setSearchResults } = useContext(SearchContext);

  const { products, setProducts} = useContext(ProductContext)

  useEffect(() => {
    setSearchField('');
    setSearchResults([])
  }, []);

  useEffect(() => {
  }, [searchField]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }

return (
  <div>
    <Form inline onSubmit={handleSearch}>
      <FormControl
        type="text"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
    <div>
      {searchResults && searchResults.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  </div>
);
}
export default Search;

