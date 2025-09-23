import React from 'react';
import classes from './Process.module.scss';
import Processnumber from '@/components/processnumber/Processnumber';
import Thanks from '@/components/thanks/Thanks';
const Process = () => {
  return (
    <div className={`${classes.Process} border-content-block`}>
      <Processnumber />
      <Thanks />
    </div>
  );
};

export default Process;
