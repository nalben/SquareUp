import React from 'react';
import classes from './Hero.module.scss'
import Mainbtn from '../UI/mainbtn/Mainbtn';
import background from '@/assets/img/background.png'


const Hero = () => {
    return (
        <div className={classes.hero} style={{ backgroundImage: `url(${background})` }}>
            <h1>A Digital Product Studio <br /> that will Work</h1>
            <div className={classes.for}>
                <h6>For</h6>
                <span>Startups</span>
                <h6>,</h6>
                <span>Enterprise leaders</span>
                <h6>,</h6>
                <span>Media & Publishers</span>
                <h6>and</h6>
                <span>Social Good</span>
            </div>
            <div className={classes.for2}>
                <h6>For Startups, Enterprise leaders, Media & Publishers and Social Good</h6>
            </div>
            <div className={classes.btns}>
                <Mainbtn text='Our Works' href='/work' variant='blur'/>
                <Mainbtn text='Contact Us' href='/contact' variant='accentBig'/>
            </div>
        </div>
    );
};

export default Hero;