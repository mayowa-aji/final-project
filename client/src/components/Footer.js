import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="footer__heading">About Us</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/about">Our Story</Link>
              </li>
            </ul>

          </Col>
          <Col md={4}>
            <h3 className="footer__heading">Customer Service</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="footer__list-item">
                <Link to="/orders">Order Tracking</Link>
              </li>
              <li className="footer__list-item">
                <Link to="/returns">Returns &amp; Exchanges</Link>
              </li>
              <li className="footer__list-item">
                <Link to="/shipping">Shipping Information</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="footer__heading">Connect With Us</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} /></a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p>&copy; 2023 FlO + THEO. All Rights Reserved.</p>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="footer__list-item">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="footer__list-item">
              <Link to="/blog">Blog</Link>
             </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
