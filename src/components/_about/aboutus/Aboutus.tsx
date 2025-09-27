import React from 'react';
import back from '@/assets/img/servicesback.png'
import Logoblock from './logoblock/Logoblock';
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';

const Aboutus = () => {
    return (
        <Sectionblock
        title='About Us'
        subtitle='Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.'
        background={back}
        >
            <Logoblock />
        </Sectionblock>
    );
};

export default Aboutus;