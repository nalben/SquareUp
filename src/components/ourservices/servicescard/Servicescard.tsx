import React from 'react';
import classes from './Servicescard.module.scss';
import Iconcon from '@/components/UI/iconcon/Iconcon';
import { icons, SvgIcon } from '@/utils/icons'; // твой require.context
import ServicesData from '@/assets/data/ourservices/data.json';

const Servicescard: React.FC = () => {
  return (
    <>
      {ServicesData.map((item) => {
        const Icon: SvgIcon | null = icons[item.icon];

        return (
          <div key={item.headline} className={classes.card}>
            <div className={classes.cardtopcon}>
              <div className={classes.headlinecon}>
              <Iconcon>
                {Icon && <Icon />}
              </Iconcon>
              <h1>{item.headline}</h1>
              </div>
              <p>{item.content}</p>
            </div>
            <a href="/">Learn More</a>
          </div>
        );
      })}
    </>
  );
};

export default Servicescard;
