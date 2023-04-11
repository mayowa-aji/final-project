import React from 'react';
import { Card} from 'react-bootstrap';


const ProductCard = ({ imageUrl, name, price }) => {
  // const imagePath = require(`../images/${imageName}`).default;
  return (
    <Card style={{ width: '18rem', border:'none' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
