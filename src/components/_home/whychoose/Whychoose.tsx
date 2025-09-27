import React from 'react';
import back from '@/assets/img/backwhy.png'
import classes from './Whychoose.module.scss'
import Whychoosecard from './whychoosecard/Whychoosecard';
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';

const Ourservices = () => {
    return (
      <Sectionblock title="Why Choose SquareUp?" subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results." background={back} >
        <div className={`${classes.cardscon}`}>
            <Whychoosecard />
        </div>
      </Sectionblock>
    );
};

export default Ourservices;