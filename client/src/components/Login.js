import { useState, useContext, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { CustomerContext } from '../contexts/CustomerContext';
import { LoginContext } from '../contexts/LoginContext';
import { RegisterContext } from '../contexts/RegisterContext';
import { useNavigate } from 'react-router-dom';

// import styles from "./LoginModal.module.css"

const Login = () => {
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const { showRegister, setShowRegister } = useContext(RegisterContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { customer, setCustomer, orders, setOrders } =
    useContext(CustomerContext);
  const [isLoginEmpty, setIsLoginEmpty] = useState(false); // Should be false at beginning
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const onFieldChange = (e) => {
    // Reset Error Toasts
    setIsLoginEmpty(false);
    setIsInvalid(false);
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      console.log(email);
    } else {
      setPassword(e.target.value);
      console.log(password);
    }
  };

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setIsLoginEmpty(true);
    } else {
      setIsLoginEmpty(false);
    }
    if (isLoginEmpty === false) {
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        console.log(response);
        const data = await response.json();
        if (response.ok) {
          setCustomer(data);
          console.log(customer);
        } else {
          setIsInvalid(true);
          console.log('eaifjaefjiej');
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getOrdersForCustomer = async () => {
    const response = await fetch(`/orders/bycustomer/${customer.customer_id}`);
    const data = await response.json();
    setOrders(data);
  };

  // Once user logs in, close modal and set orders
  useEffect(() => {
    setShowLogin(false);
    getOrdersForCustomer();
    navigate('/');
  }, [customer]);

  return (
    <Modal show={showLogin} onHide={() => setShowLogin(false)}>
      <Modal.Title>Login</Modal.Title>
      <Modal.Body>
        <h2>Login to Account</h2>
        {isLoginEmpty ? <p>Please enter your email and password.</p> : null}
        {isInvalid && !isLoginEmpty ? (
          <p>Invalid email or password. Please try again.</p>
        ) : null}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mt-1">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onFieldChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
              className=" rounded-0"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onFieldChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleLogin}
            className="custom-btn rounded-0">
            Login
          </Button>
          <p className="mx-auto">
            Don't have an account? <a onClick={switchToRegister}>Create one</a>.
          </p>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setShowLogin(false)}
          className="custom-btn rounded-0">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
