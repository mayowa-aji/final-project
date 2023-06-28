import React from 'react';

import Marquee from './Marquee';
import BestSellers from './BestSellers';
import Press from './Press';

const HomePage = () => {
  return (
    <div>
      <Marquee />
      <BestSellers/>
      <Press />
    </div>
  );
}

export default HomePage;

