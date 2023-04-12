import React from 'react';
import TheAccordion from './TheAccordion';

import '../styles/faq.css'


const Faq = () => {
  return (
    <div className='accordian-container'>
      <h2>Frequently Asked Questions</h2>
      <TheAccordion number='0' header='How do I store my body butter? ' body= 'The body butter is best stored at a cool temperature. Settling and/or melting may occur in warm weather, this however will not affect the beneficial properties of the body butter.' />
      <TheAccordion number='1' header='How should I use my body butter?' body= 'Apply a small amount of the body butter and gently massage into skin in a circular motion. Our body butter is extremely concentrated, containing no water or fillers, so a little goes a long way.' />
      <TheAccordion number='2' header='What is the shelf life of you products?' body= 'Our products have a shelf life between 12 months. However we do recommend you use within 6 months of purchase to ensure peak freshness.' />
      <TheAccordion number='3' header='How soon should I expect my order?' body= 'We hand-craft each item, so please allow up to one week for your item to ship.' />
      <TheAccordion number='4' header='Do you test on animals? ' body= 'No, just family and friends :)' />

    </div>
  );
}

export default Faq;

