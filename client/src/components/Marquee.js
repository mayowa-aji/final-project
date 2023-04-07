import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../styles/marquee.css';

const Marquee = () => {
  return (
    <Container fluid className="carousel px-5 py-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/marquee-1.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/marquee-2.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/marquee-3.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Marquee;
