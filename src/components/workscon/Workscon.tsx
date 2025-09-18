import React from 'react';
import Iconsstructure from '../iconsstructure/Iconsstructure';
import classes from './Workscon.module.scss';
import data from '@/assets/data/projects/data.json';
import ProjectCard from './projects/Projects';

const Workscon: React.FC = () => {
  return (
    <Iconsstructure
      title="At SquareUp"
      paragraph="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
      note="Here are ten examples of our notable works:"
    >
      <div className={classes.container}>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Iconsstructure>
  );
};

export default Workscon;
