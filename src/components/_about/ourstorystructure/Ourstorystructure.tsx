import React from 'react';
import classes from './Ourstorystructure.module.scss'
import Block from './block/Block';
import Today from '@/components/__general/today/Today';

const Ourstorystructure = () => {
    return (
        <div className={classes.container}>
            <h2>Our Story</h2>
            <Block />
            <Today />
        </div>
    );
};

export default Ourstorystructure;