import React from 'react';
import classes from './Days.module.scss'
import Stayconnected from '@/components/__general/stayconnected/Stayconnected';

const Days = () => {
    return (
        <div className={classes.container}>
            <div className={classes.days}>
                <h3>Operating Days</h3>
                <span>Modnay to Friday</span>
            </div>
            <div className={classes.stay}>
                <Stayconnected />
            </div>
        </div>
    );
};

export default Days;