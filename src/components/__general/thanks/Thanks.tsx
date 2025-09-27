import React from 'react';
import back from '@/assets/img/backthanks.png'
import Form from '@/components/__general/form/Form'
import Sectionblockbig from '@/components/__UI/sectionblockbig/Sectionblockbig';
import Mainbtn from '@/components/__UI/mainbtn/Mainbtn';

const Thanks = () => {
    return (
        <Sectionblockbig 
        title="Thank you for your Interest in SquareUp."
        subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        background={back}
        button={<Mainbtn variant="accentSuperBig" text="Start Project" href="/work"/>}
        >
        <Form />
        </Sectionblockbig>
    );
};

export default Thanks;