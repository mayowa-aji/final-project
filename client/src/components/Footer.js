import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="footer__heading">About Us</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Our Story</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="footer__heading">Customer Service</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Contact Us</li>
              <li className="footer__list-item">Order Tracking</li>
              <li className="footer__list-item">Returns &amp; Exchanges</li>
              <li className="footer__list-item">Shipping Information</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="footer__heading">Connect With Us</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Facebook</li>
              <li className="footer__list-item">Twitter</li>
              <li className="footer__list-item">Instagram</li>
              <li className="footer__list-item">Pinterest</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p>&copy; 2023 FlO + THEO. All Rights Reserved.</p>
            <ul className="footer__list">
              <li className="footer__list-item">FAQ</li>
              <li className="footer__list-item">Privacy Policy</li>
              <li className="footer__list-item">Blog</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
