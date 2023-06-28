import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Payment:", payment);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Shipping address:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter shipping address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPayment">
        <Form.Label>Payment information:</Form.Label>
        <Form.Control
          as="select"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>Select payment option</option>
          <option>Credit card</option>
          <option>PayPal</option>
          <option>Bitcoin</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CheckoutForm;
