import React from 'react';
import back from '@/assets/img/backgroundreviews.png'
import Reviewscard from './reviewscard/Reviewscard';
import classes from './Reviews.module.scss'
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';

const Reviews = () => {
    return (
        <Sectionblock title="What our Clients say About us" subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us" background={back}>
            <div className={`${classes.cardscon}`}>
                <Reviewscard />
            </div>
            
        </Sectionblock>
    );
};

export default Reviews;