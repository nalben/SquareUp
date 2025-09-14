import React, { ReactNode } from 'react';
import classes from './Iconsstructure.module.scss';

interface IconsstructureProps {
  title: string;
  paragraph: string;
  note: string;
  children: ReactNode;
}

const Iconsstructure: React.FC<IconsstructureProps> = ({ title, paragraph, note, children }) => {
  return (
    <div className={classes.structure_con}>
      <div className={classes.headline}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <span>{note}</span>
      </div>
      {children}
    </div>
  );
};

export default Iconsstructure;
