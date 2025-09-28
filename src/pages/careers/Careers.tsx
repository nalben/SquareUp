import React from 'react';
import classes from './Careers.module.scss';
import Join from '@/components/_careers/join/Join';
import Welcome from '@/components/_careers/welcome/Welcome';
import Careersicon from '@/components/_careers/careersicon/Careersicon';
import Today from '@/components/__general/today/Today';

const Careers = () => {
  return (
    <div className={`${classes.Careers} border-content-block`}>
      <Join />
      <Welcome />
      <Careersicon />
      <Today />
    </div>
  );
};

export default Careers;
