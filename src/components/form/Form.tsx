import React, { useState } from 'react';
import classes from './Form.module.scss';
import Mainbtn from '../_UI/mainbtn/Mainbtn';
import Inputrange from '../_UI/inputrange/Inputrange';

const Form: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState<{ [key: string]: boolean }>({
    check1: true,
    check2: false,
    check3: false,
    check4: false,
  });
  const [budget, setBudget] = useState<[number, number]>([0, 9000]);
  const [message, setMessage] = useState('');

  const handleCheckboxChange = (id: string) => {
    setReason((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка обязательных полей
    if (!Object.values(reason).some((v) => v)) {
      alert('Please select at least one reason.');
      return;
    }

    if (!message.trim()) {
      alert('Please enter your message.');
      return;
    }

    const data = {
      fullName,
      email,
      reason: Object.keys(reason).filter((key) => reason[key]),
      budget,
      message,
    };

    try {
      // Отправка на JSON Server
      const response = await fetch('http://localhost:5000/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Очистка формы
        setFullName('');
        setEmail('');
        setReason({ check1: true, check2: false, check3: false, check4: false });
        setBudget([0, 9000]);
        setMessage('');
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error.');
    }
  };

  return (
    <form className={classes.form_con} onSubmit={handleSubmit} id="contactForm">
      <div className={`${classes.text} ${classes.item}`}>
        <h4>Full Name</h4>
        <input
          type="text"
          id="fullName"
          placeholder="Type here"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className={`${classes.text} ${classes.item}`}>
        <h4>Email</h4>
        <input
          type="email"
          id="email"
          placeholder="Type here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={`${classes.check} ${classes.item}`}>
        <h4>Why are you contacting us?</h4>
        <div className={classes.check_con}>
          {[
            { id: 'check1', label: 'Web Design' },
            { id: 'check2', label: 'Collaboration' },
            { id: 'check3', label: 'Mobile App Design' },
            { id: 'check4', label: 'Others' },
          ].map(({ id, label }) => (
            <div className={classes.input_con} key={id}>
              <label htmlFor={id}>
                {label}
                <input
                  type="checkbox"
                  id={id}
                  checked={reason[id]}
                  onChange={() => handleCheckboxChange(id)}
                />
                <span></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={`${classes.range} ${classes.item}`}>
        <h4>Your Budget</h4>
        <h5>Slide to indicate your budget range</h5>
        <Inputrange onChange={(val) => setBudget(val)} />
      </div>

      <div className={`${classes.message} ${classes.text} ${classes.item}`}>
        <h4>Your Message</h4>
        <input
          type="text"
          id="message"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <center className={classes.btn}>
        <Mainbtn variant="accentSuperBig" text="Submit" href="" type="submit" />
      </center>
    </form>
  );
};

export default Form;
