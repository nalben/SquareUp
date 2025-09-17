
import React from 'react';
import classes from './Work.module.scss'
import Ourworks from '@/components/ourworks/Ourworks';
import Ideas from '@/components/ideas/Ideas';
const Work = () => {

    return (
        <div className={`${classes.work} border-content-block`}>
            <Ourworks />
            <Ideas />
        </div>
    );
};

export default Work;