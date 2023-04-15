
import React, { useContext, useState} from 'react';
import { SearchContext } from "../contexts/SearchContext"
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  const { setSearchField } = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);;


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchField(searchQuery).then((results) => {
      setSearchResults(results);
    }).catch((error) => {
      console.log(error);
    });
  }

return (
  <div>
    <Form inline onSubmit={handleSearch}>
      <FormControl type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
    <div>
      {searchResults.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);
}


export default Search;

