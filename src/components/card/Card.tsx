import React from 'react';
import Image  from "@/assets/333.png";
import classes from './Card.module.scss'

interface CardProps {
  card: {
    id: number;
    headline: string;
    description: string;
  };
}

const Card = (props: CardProps) => {
  return (
    <div className={classes.card}>
      <h1>{props.card.headline}</h1>
      <p>{props.card.description}</p>
      <img src={Image} alt="" />
    </div>
  );
};

export default Card;