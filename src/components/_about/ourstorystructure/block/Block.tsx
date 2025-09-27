import React from 'react';
import classes from './Block.module.scss';
import Data from '@/assets/data/about/numbers.json';

const Block: React.FC = () => {
  return (
    <div className={classes.block_con}>
      {Data.map((item, index) => (
        <div key={index} className={classes.block_item}>
          <div className={classes.headline}>
            <h1>{item.number}</h1>
            <span>{item.headline}</span>
          </div>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Block;
