import React, { useState } from 'react';
import FaqData from '@/assets/data/faq/data.json';
import classes from './Faqaccordion.module.scss';
import IconCon from '@/components/_UI/iconcon/Iconcon';
import Close from '@/assets/icons/Close.svg';

const firstHalf = FaqData.slice(0, 4);
const secondHalf = FaqData.slice(4);

const Faqaccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const renderItem = (item: any, index: number) => {
    const isOpen = openIndex === index;

    return (
      <div key={item.count} className={classes.item_con}>
        <IconCon>{item.count}</IconCon>
        <div className={classes.details_con}>
          <details
            open={isOpen}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(index);
            }}
          >
            <summary className={isOpen ? 'open' : 'close'}>
              <h2>{item.question}</h2>
              <Close />
            </summary>
            <p>{item.answer}</p>
          </details>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.accordion_con}>
      <div className={classes.column1}>
        {firstHalf.map((item, idx) => renderItem(item, idx))}
      </div>
      <div className={classes.column2}>
        {secondHalf.map((item, idx) => renderItem(item, idx + firstHalf.length))}
      </div>
    </div>
  );
};

export default Faqaccordion;
