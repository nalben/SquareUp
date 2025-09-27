import React from 'react';
import back from '@/assets/img/BACKPROCESS.png'
import Sectionblock from '@/components/__UI/sectionblock/Sectionblock';
import Iconsstructure from '@/components/__general/iconsstructure/Iconsstructure';
import Block from './block/Block';

const Processnumber = () => {
    return (
        <div>
            <Sectionblock
            title="Process of Starting the Project"
            subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
            background={back}
            />
            <Iconsstructure
            title="At SquareUp"
            paragraph="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
            note="Here's an overview of our typical process:"
            >
                <Block />
            </Iconsstructure>
        </div>
    );
};

export default Processnumber;