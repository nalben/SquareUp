import React from 'react';
import classes from './SectionBlock.module.scss';

interface SectionBlockProps {
  title: string;
  subtitle: string;
  background: string;
  children?: React.ReactNode;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, subtitle, background, children }) => {
  return (
    <div className={classes.section}>
      <div className={`${classes.backcon} border-content-block`} style={{ backgroundImage: `url(${background})` }}>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default SectionBlock;