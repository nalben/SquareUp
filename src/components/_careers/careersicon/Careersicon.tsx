import React from 'react';
import classes from './Careersicon.module.scss';
import IconCon from '@/components/__UI/iconcon/Iconcon';
import { getIcon } from '@/utils/icons';
import Data from '@/assets/data/careers/icons.json';
import { NavLink } from 'react-router-dom';

const Careersicon: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headline_section}>
        <span>Current Openings</span>
        <p>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
      </div>
      {Data.map((group, i) => (
        <div key={i} className={classes.line}>
          <div className={classes.category}>
            <span>{group.category}</span>
          </div>
          {group.cards.map((card, j) => {
            const Icon = getIcon(card.icon);
            return (
              <div key={j} className={classes.block}>
                <div className={classes.top}>
                  <div className={classes.icon}>
                    <IconCon>{Icon ? <Icon /> : null}</IconCon>
                  </div>
                  <h2>{card.headline}</h2>
                  <p>{card.paragraph}</p>
                </div>
                <NavLink to="/contact">Apply now</NavLink>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Careersicon;
