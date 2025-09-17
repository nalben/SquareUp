import React from 'react';
import classes from './SectionBlock.module.scss';

interface SectionBlockProps {
  title: string;
  subtitle: string;
  background: string;
  children?: React.ReactNode;
}

const Sectionblock: React.FC<SectionBlockProps> = ({ title, subtitle, background, children }) => {
  return (
    <div className={classes.section}>
      <div className={`${classes.backcon}`} style={{ backgroundImage: `url(${background})` }}>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Sectionblock;