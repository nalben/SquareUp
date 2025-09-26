import React from 'react';
import classes from './About.module.scss';
import Aboutus from '@/components/aboutus/Aboutus';
import Ourstory from '@/components/ourstory/Ourstory';

const About = () => {
  return (
    <div className={`${classes.About} border-content-block`}>
      <Aboutus />
      <Ourstory />
    </div>
  );
};

export default About;
