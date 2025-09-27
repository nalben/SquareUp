import Hero from '@/components/_home/hero/Hero';
import classes from './Home.module.scss'
import React from 'react';
import Companies from '@/components/_home/companies/Companies';
import Ourservices from '@/components/_home/ourservices/Ourservices';
import Whychoose from '@/components/_home/whychoose/Whychoose';
import Reviews from '@/components/_home/reviews/Reviews';
import Faq from '@/components/__general/faq/Faq';
import Thanks from '@/components/__general/thanks/Thanks';


const Home = () => {



    return (
        <div className={`${classes.home} border-content-block`}>
            <Hero />
            <Companies />
            <Ourservices />
            <Whychoose />
            <Reviews />
            <Faq />
            <Thanks />
        </div>
        
    );
};

export default Home;