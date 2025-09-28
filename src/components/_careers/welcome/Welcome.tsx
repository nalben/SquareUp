import Iconsstructure from '@/components/__general/iconsstructure/Iconsstructure';
import React from 'react';
import Block from './block/Block';

const Welcome = () => {
    return (
        <Iconsstructure
        title='Welcome to SquareUp, where talent meets opportunity!'
        paragraph="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
        note='Why Work at SquareUp?'
        >
            <Block />
        </Iconsstructure>
    );
};

export default Welcome;