
import React from 'react';
import classes from './Services.module.scss'
import Ourservices2 from '@/components/ourservices2/Ourservices';
import Servicesdesign from '@/components/servicesdesign/Servicesdesign';
import Ideas from '@/components/ideas/Ideas';
const Services = () => {

    return (
        <div className={classes.services}>
            <Ourservices2 />
            <Servicesdesign />
            <Ideas />
        </div>
    );
};

export default Services;