import React from 'react';
import classes from './Faq.module.scss'
import back from '@/assets/img/backfaq.png'
import Faqaccordion from './faqaccordion/Faqaccordion';
import SectionBlock from '../_UI/sectionblock/Sectionblock';

const Faq = () => {
    return (
        <SectionBlock title="Frequently Asked Questions" subtitle="Still you have any questions? Contact our Team via hello@squareup.com" background={back}>
            <div className={`${classes.cardscon} border-content-block`}>
                <Faqaccordion />
            </div>
            
        </SectionBlock>
    );
};

export default Faq;