import React from 'react';
import Sectionblockbig from '../_UI/sectionblockbig/Sectionblockbig';
import back from '@/assets/img/backthanks.png'
import Mainbtn from '../_UI/mainbtn/Mainbtn';
import Form from '@/components/form/Form'

const Ideas = () => {
    return (
        <Sectionblockbig 
        title="Let us Bring your Ideas to Life in the Digital World."
        subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        background={back}
        button={<Mainbtn variant="accentSuperBig" text="Start Project" href="/work"/>}
        >
        <Form />
        </Sectionblockbig>
    );
};

export default Ideas;