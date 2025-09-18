import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Projects.module.scss';
import Arrow from '@/assets/icons/monochrome/Arrowlink.svg';
import { getImage } from '@/utils/icons';

interface ProjectItem {
    title: string;
    image: string;
    name: string;
    linkname: string;
    href: string;
    description: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imgSrc = getImage(project.image);

  return (
    <div className={classes.card}>
      <div className={classes.headline}>
        <span>{project.title}</span>
      </div>
      <div className={classes.info}>
        {imgSrc && <img src={imgSrc} alt={project.title} />}
        <div className={classes.info_top}>
          <h2>{project.name}</h2>
          <span>{project.linkname}</span>
          <NavLink to={project.href}>
            <Arrow />
          </NavLink>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
