import React from 'react';
import classes from './Logoblock.module.scss';
import Logo from '@/assets/icons/colored/Logobig.svg';
import back from '@/assets/img/aboutback.png';
import Data from '@/assets/data/about/aboutus.json';

const Logoblock: React.FC = () => {
  return (
    <>
      {Data.map((item, index) => (
        <div key={index} className={classes.container}>
          <div className={classes.text_con}>
            <h1>{item.headline}</h1>
            <p>{item.paragraph}</p>
          </div>
          <div className={classes.logo_con} style={{ backgroundImage: `url(${back})` }}>
            <span>
              <Logo />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Logoblock;
