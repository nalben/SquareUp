
import React from 'react';
import classes from './Services.module.scss'
import Ourservices2 from '@/components/_services/ourservices2/Ourservices';
import Ideas from '@/components/__general/ideas/Ideas';
import Projectmanagement from '@/components/_services/projectmanagement/Projectmanagement';
import Engineering from '@/components/_home/engineering/Engineering';
import Servicesdesign from '@/components/_services/servicesdesign/Servicesdesign';
const Services = () => {

    return (
        <div className={`${classes.services} border-content-block`}>
            <Ourservices2 />
            <Servicesdesign />
            <Engineering />
            <Projectmanagement />
            <Ideas />
        </div>
    );
};

export default Services;