import React from 'react';
import back from '@/assets/img/servicesback.png'
import classes from './Ourservices.module.scss'
import SectionBlock from '../_UI/sectionblock/Sectionblock';

const Ourservices2 = () => {
    return (
      <SectionBlock title="Our Services" subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience." background={back} >
        <div className={`${classes.cardscon} border-content-block`}>
        </div>
      </SectionBlock>
    );
};

export default Ourservices2;