
import React from 'react';
import classes from './Services.module.scss'
import Ourservices2 from '@/components/ourservices2/Ourservices';
import Servicesdesign from '@/components/servicesdesign/Servicesdesign';
const Services = () => {

    return (
        <div className={classes.services}>
            <Ourservices2 />
            <Servicesdesign />
        </div>
    );
};

export default Services;