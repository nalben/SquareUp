import React from 'react';
import classes from './Iconsblock.module.scss';
import IconCon from '@/components/__UI/iconcon/Iconcon';
import { getIcon } from '@/utils/icons';

interface CardItem {
  icon: string;
  text: string;
}

interface IconsblockProps {
  title: string;
  cards: CardItem[];
}

const Iconsblock: React.FC<IconsblockProps> = ({ title, cards }) => {
  return (
    <div className={classes.block}>
      <div className={classes.block_headline}>
        <h2>{title}</h2>
      </div>
      <div className={classes.block_con}>
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon);
          return (
            <div key={index} className={classes.block_item}>
              <IconCon>
                {Icon ? <Icon /> : null}
              </IconCon>
              <h3>{card.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Iconsblock;
