import Companies from '@/components/companies/Companies';
import Hero from '@/components/hero/Hero';
import classes from './Home.module.scss'
import React from 'react';
const Home = () => {



    return (
        <div className={`${classes.home} border-content-block`}>
            <Hero />
            <Companies />
        </div>
        
    );
};

export default Home;