import React from 'react';
import classes from './Stayconnected.module.scss'
import Facebook from '@/assets/icons/facebook.svg'
import Twitter from '@/assets/icons/twitter.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import Iconbox from '../UI/iconbox/Iconbox';

const Stayconnected = () => {
    return (
        <div className={classes.container}>
            <span>Stay Connected</span>
            <div className={classes.icons_con}>
                <Iconbox href="https://www.facebook.com/" icon={<Facebook />} />
                <Iconbox href="https://x.com/" icon={<Twitter />} />
                <Iconbox href="https://www.linkedin.com/" icon={<Linkedin />} />
            </div>
        </div>
    );
};

export default Stayconnected;