import React from 'react';
import { Row, Col } from 'react-bootstrap';


import '../styles/ingredients.css';

const Ingredient = ({ name, image, description }) => {
  return (
    <Row style={{ paddingTop: '2rem' }}>
      <Col md={3}>
        <img className='ingredient-images' src={image} alt={name} />
      </Col>
      <Col md={9} className='d-flex align-items-center'>
        <p>{description}</p>
      </Col>
    </Row>
  );
};
 export default Ingredient
