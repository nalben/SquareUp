import React from 'react';
import Iconsstructure from '../iconsstructure/Iconsstructure';
import data from '@/assets/data/services/projectManagement.json'
import Iconsblock from '../iconsstructure/iconsblock/Iconsblock';
import classes from './Projectmanagement.module.scss'

const Projectmanagement = () => {
  return (
    <div className={`${classes.cardscon}`}>
        <Iconsstructure
        title="Project Management"
        paragraph="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
        note="Our project management services include:"
        >
        {data.map(group => (
            <Iconsblock 
            key={group.title} 
            title={group.title} 
            cards={group.cards} 
            />
        ))}
        </Iconsstructure>
    </div>
  );
};


export default Projectmanagement;