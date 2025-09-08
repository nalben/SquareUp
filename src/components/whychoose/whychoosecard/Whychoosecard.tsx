import React from 'react';
import classes from './Whychoosecard.module.scss';
import Iconcon from '@/components/_UI/iconcon/Iconcon';
import { icons, SvgIcon } from '@/utils/icons';
import WhychooseData from '@/assets/data/whychoose/data.json'

const Whychoosecard: React.FC = () => {
  return (
    <>
      {WhychooseData.map((item) => {
        const Icon: SvgIcon | null = icons[item.icon];

        return (
          <div key={item.headline} className={classes.card}>
              <div className={classes.headlinecon}>
              <Iconcon>
                {Icon && <Icon />}
              </Iconcon>
              <h1>{item.headline}</h1>
              </div>
              <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default Whychoosecard;