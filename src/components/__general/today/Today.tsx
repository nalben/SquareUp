import React from 'react';
import classes from './Today.module.scss'
import Logo from '@/assets/icons/colored/Logobig.svg'
import Mainbtn from '@/components/__UI/mainbtn/Mainbtn';

const Today = () => {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Logo />
                <div className={classes.headline}>
                    <h3>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
                    <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className={classes.bottom}>
                <h3>Welcome to SquareUp</h3>
                <span>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span>
                <Mainbtn
                text='Start Project'
                href='/contact'
                />
            </div>
        </div>
    );
};

export default Today;