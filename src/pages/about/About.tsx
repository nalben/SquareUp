import React from 'react';
import classes from './About.module.scss';
import Ourstorystructure from '@/components/_about/ourstorystructure/Ourstorystructure';
import Aboutus from '@/components/_about/aboutus/Aboutus';

const About = () => {
  return (
    <div className={`${classes.About} border-content-block`}>
      <Aboutus />
      <Ourstorystructure />
    </div>
  );
};

export default About;
