import React from 'react';
import classes from './Faq.module.scss'
import back from '@/assets/img/backfaq.png'
import Faqaccordion from './faqaccordion/Faqaccordion';
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';

const Faq = () => {
    return (
        <Sectionblock title="Frequently Asked Questions" subtitle="Still you have any questions? Contact our Team via hello@squareup.com" background={back}>
            <div className={`${classes.cardscon}`}>
                <Faqaccordion />
            </div>
            
        </Sectionblock>
    );
};

export default Faq;