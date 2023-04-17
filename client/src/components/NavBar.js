import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { LoginContext } from '../contexts/LoginContext.js';
import { CartContext } from '../contexts/CartContext';
import { CustomerContext } from '../contexts/CustomerContext';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { setShowLogin, showLogin } = useContext(LoginContext);
  const { setShowCart } = useContext(CartContext);
  const { customer, setCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();

  const Logout = () => {
    setCustomer(undefined);
    navigate('/');
  };

  return (
    <Navbar expand="md">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
        className="ml-auto"
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={`justify-content-center ${expanded ? 'show' : ''}`}>
        <Nav className="mr-auto">
          <Nav.Link className="px-4" onClick={() => navigate('/')}>
            Home
          </Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => navigate('/shop')}>
              Shop All
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/shop-soaps')}>
              Bar Soaps
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/shop-body-butter')}>
              Body Butters
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/shop-body-oil')}>
              Body Oils
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/shop-men')}>
              Men
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="px-4" onClick={() => navigate('/about')}>
            About
          </Nav.Link>
          <Nav.Link className="px-4" onClick={() => navigate('/ingredients')}>
            Ingredients
          </Nav.Link>
          <Nav.Link className="px-4" onClick={() => navigate('/contact')}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav.Link className="px-4" onClick={() => navigate('/search')}>
          <i className="fa fa-search"></i>
        </Nav.Link>
        <Nav className="ml-auto ">
          {customer ? (
            <NavDropdown
              title={`Logout, ${customer.first_name}?`}
              id="basic-nav-dropdown">
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link
              onClick={() => {
                setShowLogin(true);
                console.log(showLogin)
              }}>
              Login/Register
            </Nav.Link>
          )}
          <Nav.Link onClick={() => setShowCart(true)}>Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
