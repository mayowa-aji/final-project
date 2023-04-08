import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/customBtn.css';

const CustomBtn = ({ text }) => {
  return (
    <Button className="custom-button" style={{ minWidth: `${text.length * 10}px` }}>
      {text}
    </Button>
  );
};

export default CustomBtn;
