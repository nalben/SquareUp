import React from 'react';
import classes from './Careers.module.scss';
import Join from '@/components/_careers/join/Join';
import Welcome from '@/components/_careers/welcome/Welcome';

const Careers = () => {
  return (
    <div className={`${classes.Careers} border-content-block`}>
      <Join />
      <Welcome />
    </div>
  );
};

export default Careers;
