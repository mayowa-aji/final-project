import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/theAccordion.css'

const TheAccordion = (props) => {
  return (
      <Accordion>
        <Accordion.Item eventKey={props.number}>
          <Accordion.Header className='header-accordion'>{props.header}</Accordion.Header>
          <Accordion.Body className='text-accordion'>
            {props.body}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

export default TheAccordion;

