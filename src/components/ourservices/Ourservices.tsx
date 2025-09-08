import React from 'react';
import SectionBlock from '../sectionblock/Sectionblock';
import back from '@/assets/img/servicesback.png'
import Servicescard from './servicescard/Servicescard';
import classes from './Ourservices.module.scss'

const Ourservices = () => {
    return (
      <SectionBlock title="Our Services" subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience." background={back} >
        <div className={`${classes.cardscon} border-content-block`}>
          <Servicescard />
        </div>
      </SectionBlock>
    );
};

export default Ourservices;