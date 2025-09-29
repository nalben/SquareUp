import React from 'react';
import classes from '../Skeleton.module.scss'
import Mainbtn from '@/components/__UI/mainbtn/Mainbtn';

const HeroSkeleton = () => {
    return (
        <div className={classes.home_con}>
            <div className={classes.hero}>
                <h1>A Digital Product Studio that will Work</h1>
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
                    <Mainbtn text='Contact Us' href='' variant='accentBig'/>
                    <Mainbtn text='Contact Us' href='' variant='accentBig'/>
                </div>
            </div>
        </div>
    );
};

export default HeroSkeleton;