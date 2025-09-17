import React from 'react';
import back from '@/assets/img/backwhy.png'
import classes from './Whychoose.module.scss'
import Whychoosecard from './whychoosecard/Whychoosecard';
import SectionBlock from '../_UI/sectionblock/Sectionblock';

const Ourservices = () => {
    return (
      <SectionBlock title="Why Choose SquareUp?" subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results." background={back} >
        <div className={`${classes.cardscon}`}>
            <Whychoosecard />
        </div>
      </SectionBlock>
    );
};

export default Ourservices;