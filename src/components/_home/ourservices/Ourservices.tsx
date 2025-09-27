import React from 'react';
import back from '@/assets/img/servicesback.png'
import Servicescard from './servicescard/Servicescard';
import classes from './Ourservices.module.scss'
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';

const Ourservices = () => {
    return (
      <Sectionblock title="Our Services" subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience." background={back} >
        <div className={`${classes.cardscon}`}>
          <Servicescard />
        </div>
      </Sectionblock>
    );
};

export default Ourservices;