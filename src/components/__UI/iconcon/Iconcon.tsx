import React from 'react';
import classes from './Iconcon.module.scss';

interface IconConProps {
  children: React.ReactNode;
}

const IconCon: React.FC<IconConProps> = ({ children }) => {
  return <div className={classes.icon_con}>{children}</div>;
};

export default IconCon;
