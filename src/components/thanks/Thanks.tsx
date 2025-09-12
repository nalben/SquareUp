import React from 'react';
import Sectionblockbig from '../_UI/sectionblockbig/Sectionblockbig';
import back from '@/assets/img/backthanks.png'
import Mainbtn from '../_UI/mainbtn/Mainbtn';
import Form from '@/components/form/Form'

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