import React from 'react';
import Ingredient from './Ingredient';
import { Container, Button, Form} from 'react-bootstrap'

import '../styles/contact.css'

const Contact = () => {
  return (
    <>
      <Container>

      <div className='contact-padding'>
        <Ingredient image ='https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383138035490-JPI2GOQ51TBRHJAPH65G/IMG_9116+%281%29.JPG?format=1000w' headline ='Contact Us' description = " We can't wait to hear from you!"/>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </Container>
    </>
  );
}

export default Contact;

