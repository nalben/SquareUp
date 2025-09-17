import React from 'react';
import classes from './Sectionblockbig.module.scss'
import Logo from '@/assets/icons/colored/LogoSmall.svg'

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
      <div className={`${classes.backcon}`} style={{ backgroundImage: `url(${background})` }}>
        <Logo />
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
        {button}
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Sectionblockbig;