
import React, { useContext, useEffect, useState} from 'react';
import { SearchContext } from "../contexts/SearchContext"
import { Form, FormControl, Button } from 'react-bootstrap';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const Search = () => {
  const { setSearchField, searchField, searchResults, setSearchResults } = useContext(SearchContext);

  const { products, setProducts} = useContext(ProductContext)
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);;

  useEffect(() => {
    setSearchResults(products.filter(product => product.product_name.toLowerCase().includes(searchField.toLowerCase())))
  },[searchField])

  const handleSearch = (e) => {
    e.preventDefault();
    // setSearchField(searchQuery).then((results) => {
    //   setSearchResults(results);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

return (
  <div>
    <Form inline onSubmit={handleSearch}>
      <FormControl type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)} placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-success" type="submit">Search</Button> */}
    </Form>
    <div>
      {searchResults.map((product) => <ProductCard product={product} /> )}
    </div>
  </div>
);
}


export default Search;

