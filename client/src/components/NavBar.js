import { React, useState } from 'react';
import { Nav, Navbar, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import '../styles/navbar.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginClose = () => {
    setShowLogin(false);
    setUsername('');
    setPassword('');
  }

  const handleLoginSubmit = () => {
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    handleLoginClose();
  }
  return (
    <>
    <Navbar expand="md">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
        className="ml-auto" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={`justify-content-center ${expanded ? 'show' : ''}`}
      >
        <Nav className="mr-auto">
          <Nav.Link href="/" className="px-4">
            HOME
          </Nav.Link>
          <NavDropdown className="px-4" title="SHOP" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">SHOP ALL</NavDropdown.Item>
            <NavDropdown.Item href="/">BAR SOAPS</NavDropdown.Item>
            <NavDropdown.Item href="/">BODY OILS</NavDropdown.Item>
            <NavDropdown.Item href="/">MEN</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/ingredients"  className="px-4">ABOUT</Nav.Link>
          <Nav.Link href="/" className="px-4">
            INGREDIENTS
          </Nav.Link>
          <Nav.Link href="/" className="px-4">
            CONTACT
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto ">
            <Nav.Link href="/search" className="px-4"><i className="fa fa-search"></i></Nav.Link>
            <Nav.Link className="px-4" onClick={() => setShowLogin(true)}>ACCOUNT</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please enter your username and password.</p>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label className='mt-1'>Username</Form.Label>
              <Form.Control className=' rounded-0' type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className='mt-2'>Password</Form.Label>
              <Form.Control className=' rounded-0' type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose} className="custom-btn rounded-0">
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginSubmit} className="custom-btn rounded-0">
            Submit
          </Button>
          <p className='mx-auto'>Don't have an account? <a href="/register">Create one</a>.</p>
        </Modal.Footer>
      </Modal>
    </>

  );
};

export default NavBar;
