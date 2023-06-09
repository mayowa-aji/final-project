import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RegisterContext } from '../contexts/RegisterContext';
import { LoginContext } from '../contexts/LoginContext';

import { FieldEmpty, PasswordsDontMatch } from './ValidationToasts';
import '../styles/registration.css'

const RegisterModal = () => {
  const { showRegister, setShowRegister } = useContext(RegisterContext);
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const [isMatching, setIsMatching] = useState(true);
  const [areFieldsEmpty, setAreFieldsEmpty] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  // If passwords match retrn true otherwise return false
  const checkPasswordMatch = () => {
    if (registerForm.password !== registerForm.confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  // Return true if there is an empty field
  const checkForEmptyFields = () => {
    let found = false;
    for (let field in registerForm) {
      if (registerForm[field] === '') {
        found = true;
      }
      console.log(registerForm[field]);
    }
    return found;
  };
  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const submitRegistrationData = () => {
    // Check Passwords
    setIsMatching(checkPasswordMatch());
    setAreFieldsEmpty(checkForEmptyFields());

    if (isMatching && !areFieldsEmpty) {
      const newRegistration = {
        email: registerForm.email,
        password: registerForm.password,
        first_name: registerForm.firstName,
        last_name: registerForm.lastName,
      };

      fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRegistration),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Modal
      show={showRegister}
      onHide={() => setShowRegister(false)}
      size="lg"
      aria-labelledby="container-modal-title-vcenter"
      centered>
      <Modal.Header className='modal_body'></Modal.Header>
      <Modal.Body className='modal_body'>
        {/** If passwords dont match and all the fields are filled */}
        {!isMatching && !areFieldsEmpty ? <PasswordsDontMatch /> : null}
        {/** If there are empty fields */}
        {areFieldsEmpty ? <FieldEmpty /> : null}
        <h2>Register</h2>
        <input
          onChange={handleRegisterChange}
          name="email"
          type="text"
          placeholder="Email Address"
        />
        <input
          onChange={handleRegisterChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleRegisterChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          onChange={handleRegisterChange}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handleRegisterChange}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <button className='modal_button' onClick={submitRegistrationData}>Register</button>
        <a onClick={switchToLogin}>
          Already have an account?{' '}
          <b style={{ color: '#007bff' }}>Login here.</b>
        </a>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal_button' onClick={() => setShowRegister(false)}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
