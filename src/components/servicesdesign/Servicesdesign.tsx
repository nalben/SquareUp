import React from 'react';
import Iconsstructure from '../iconsstructure/Iconsstructure';
import data from '@/assets/data/services/design.json'
import Iconsblock from '../iconsstructure/iconsblock/Iconsblock';

const Servicesdesign = () => {
  return (
    <Iconsstructure
      title="Design"
      paragraph="At Squareup, our design team..."
      note="Our design services include:"
    >
      {data.map(group => (
        <Iconsblock 
          key={group.title} 
          title={group.title} 
          cards={group.cards} 
        />
      ))}
    </Iconsstructure>
  );
};


export default Servicesdesign;