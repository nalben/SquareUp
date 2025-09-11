import React from 'react';
import classes from './Sectionblockbig.module.scss'
import Logo from '@/assets/img/Logo2.png'

interface SectionBlockProps {
  title: string;
  subtitle: string;
  background: string;
  button: React.ReactNode;
  children?: React.ReactNode;
}

const Sectionblockbig: React.FC<SectionBlockProps> = ({ title, subtitle, background, button, children }) => {
  return (
    <div className={classes.section}>
      <div className={`${classes.backcon} border-content-block`} style={{ backgroundImage: `url(${background})` }}>
        <img src={Logo} alt="logo" />
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
        {button}
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Sectionblockbig;