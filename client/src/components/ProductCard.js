import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const productPage = () => {
    navigate(`/shop/${product.product_id}`);
  };

  return (
    <Card style={{ width: '18rem', border: 'none' }} onClick={productPage}>
      <Card.Img variant="top" src={product.image_url} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
