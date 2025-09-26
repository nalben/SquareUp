import React from 'react';
import classes from './Block.module.scss';
import data from '@/assets/data/process/data.json';

const Block: React.FC = () => {
  return (
    <div >
        <div className={classes.container}>
            {data.map((item, index) => (
                <div key={index} className={classes.con}>
                  <div className={classes.head_con}>
                      <h1>{item.number}</h1>
                      <span>{item.headline}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Block;
