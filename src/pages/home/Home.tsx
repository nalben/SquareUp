import Companies from '@/components/companies/Companies';
import Hero from '@/components/hero/Hero';
import classes from './Home.module.scss'
import React from 'react';
import Ourservices from '@/components/ourservices/Ourservices';
import Whychoose from '@/components/whychoose/Whychoose'

const Home = () => {



    return (
        <div className={classes.home}>
            <Hero />
            <Companies />
            <Ourservices />
            <Whychoose />
        </div>
        
    );
};

export default Home;