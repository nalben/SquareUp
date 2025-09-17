import React from 'react';
import Iconsstructure from '../iconsstructure/Iconsstructure';
import data from '@/assets/data/services/engineering.json'
import Iconsblock from '../iconsstructure/iconsblock/Iconsblock';
import classes from './Engineering.module.scss'

const Engineering = () => {
  return (
    <div className={`${classes.cardscon}`}>
        <Iconsstructure
        title="Engineering"
        paragraph="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
        note="Our engineering services include:"
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


export default Engineering;