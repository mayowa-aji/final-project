import React from 'react';

import '../styles/brand.css'
import Image from 'react-bootstrap/Image'

const Brand = () => {
  return (
    <div className='container'>
      <Image alt="My Image" fluid src={require("../images/logo.png")}/>
  </div>

  );
}

export default Brand;
