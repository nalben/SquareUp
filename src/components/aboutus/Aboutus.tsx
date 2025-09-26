import React from 'react';
import Sectionblock from '../_UI/sectionblock/Sectionblock';
import back from '@/assets/img/servicesback.png'
import Logoblock from './logoblock/Logoblock';

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