import React from 'react';
import classes from './CardSkeleton.module.scss'
import Image from '@/assets/333.png'

const CardSkeleton = () => {
    return (
        <div>
            <div className={classes.card}>
                <h1></h1>
                <p></p>
                <img src={Image}/>
            </div>
        </div>
    );
};

export default CardSkeleton;