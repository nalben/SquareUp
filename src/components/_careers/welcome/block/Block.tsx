import React from 'react';
import classes from './Block.module.scss'
import Data from '@/assets/data/careers/welcome.json'

const Block: React.FC = () => {
    return (
        <div className={classes.container}>
            {Data.map((item, index) => (
                <div className={classes.item}>
                    <h2>{item.headline}</h2>
                    <p>{item.paragraph}</p>
                </div>
            ))}
        </div>
        
    );
};

export default Block;