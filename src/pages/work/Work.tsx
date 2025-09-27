
import React from 'react';
import classes from './Work.module.scss'
import Ourworks from '@/components/_work/ourworks/Ourworks';
import Ideas from '@/components/__general/ideas/Ideas';
import Workscon from '@/components/_work/workscon/Workscon';
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