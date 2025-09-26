import React from 'react';
import classes from './About.module.scss';
import Aboutus from '@/components/aboutus/Aboutus';

const About = () => {
  return (
    <div className={`${classes.About} border-content-block`}>
      <Aboutus />
    </div>
  );
};

export default About;
