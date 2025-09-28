import React from 'react';
import classes from './Info.module.scss'
import Mail from '@/assets/icons/monochrome/mail.svg'
import Number from '@/assets/icons/monochrome/call.svg'
import Geo from '@/assets/icons/monochrome/geo.svg'

const Info = () => {
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <Mail />
                <span>hello@squareup.com</span>
            </div>
            <div className={classes.item}>
                <Number />
                <span>+91 91813 23 2309</span>
            </div>
            <div className={classes.item}>
                <Geo />
                <span>Get Location</span>
            </div>
        </div>
    );
};

export default Info;