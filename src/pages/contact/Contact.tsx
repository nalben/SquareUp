import React from 'react';
import classes from './Contact.module.scss';
import Contactus from '@/components/_contact/contactus/Contactus';
import Info from '@/components/_contact/info/Info';
import Form from '@/components/__general/form/Form';
import Faq from '@/components/__general/faq/Faq';
import Today from '@/components/__general/today/Today';
import Days from '@/components/_contact/days/Days';

const Contact = () => {
  return (
    <div className={`${classes.Contact} border-content-block`}>
      <Contactus />
      <Info />
      <Form />
      <Days />
      <Faq />
      <Today />
    </div>
  );
};

export default Contact;
