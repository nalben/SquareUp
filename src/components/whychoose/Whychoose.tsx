import React from 'react';
import SectionBlock from '../sectionblock/Sectionblock';
import back from '@/assets/img/backwhy.png'
import classes from './Whychoose.module.scss'
import Whychoosecard from './whychoosecard/Whychoosecard';

const Ourservices = () => {
    return (
      <SectionBlock title="Why Choose SquareUp?" subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results." background={back} >
        <div className={`${classes.cardscon} border-content-block`}>
            <Whychoosecard />
        </div>
      </SectionBlock>
    );
};

export default Ourservices;