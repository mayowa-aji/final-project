import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/navbar.css'




const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SHOP ALL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FACE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BAR SOAPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BODY BUTTERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BODY OILS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MEN</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">INGREDIENTS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
           />
            <Button>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

