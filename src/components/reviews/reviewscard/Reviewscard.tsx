import React from 'react';
import ReviewsData from '@/assets/data/reviews/data.json';
import classes from './Reviewscard.module.scss';
import { getImage } from '@/utils/icons'; // динамический require с WebP fallback

const Reviewscard = () => {
  return (
    <>
      {ReviewsData.map((item, index) => {
        const imgSrc = getImage(item.img); // отдаёт .webp, если есть
        return (
          <div key={index} className={classes.card}>
            <div className={classes.content}>
              <h2>{item.headline}</h2>
              <p>{item.content}</p>
            </div>
            <div className={classes.author}>
              <div className={classes.author_left}>
                {imgSrc && <img src={imgSrc} alt={item.name} />}
                <div className={classes.author_info}>
                  <h5>{item.name}</h5>
                  <span>{item.position}</span>
                </div>
              </div>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                Open Website
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Reviewscard;
