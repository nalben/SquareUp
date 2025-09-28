import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';
import React from 'react';
import back from '@/assets/img/BACKPROCESS.png'

const Contactus = () => {
    return (
        <Sectionblock 
        title='Contact Us'
        subtitle='Get in touch with us today and let us help you with any questions or inquiries you may have.'
        background={back}
        />
    );
};

export default Contactus;