
import React from 'react';
import classes from './Work.module.scss'
import Ourworks from '@/components/ourworks/Ourworks';
import Ideas from '@/components/ideas/Ideas';
import Workscon from '@/components/workscon/Workscon';
const Work = () => {

    return (
        <div className={`${classes.work} border-content-block`}>
            <Ourworks />
            <Workscon />
            <Ideas />
        </div>
    );
};

export default Work;