import Companies from '@/components/companies/Companies';
import Hero from '@/components/hero/Hero';
import classes from './Home.module.scss'
import React from 'react';
import Ourservices from '@/components/ourservices/Ourservices';
import Whychoose from '@/components/whychoose/Whychoose'
import Reviews from '@/components/reviews/Reviews';
import Faq from '@/components/faq/Faq';

const Home = () => {



    return (
        <div className={classes.home}>
            <Hero />
            <Companies />
            <Ourservices />
            <Whychoose />
            <Reviews />
            <Faq />
        </div>
        
    );
};

export default Home;