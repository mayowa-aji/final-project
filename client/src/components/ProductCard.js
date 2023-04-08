import React from 'react';
import { Card} from 'react-bootstrap';

const ProductCard = ({ imageName, name, price }) => {
  const imagePath = require(`../images/${imageName}`).default;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
