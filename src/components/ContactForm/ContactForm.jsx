import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';



function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function onChangeHandler (e) {
    const {name, value} = e.target;

    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  function onFormSubmitHandler (e) {
    e.preventDefault();

    onFormSubmit(name, number);

    setName('');
    setNumber('');
  }

  return (
    <form name="contact_form" onSubmit={onFormSubmitHandler} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="John Smith"
          className={s.input}
          value={name}
          onChange={onChangeHandler}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="226-48-26"
          className={s.input}
          value={number}
          onChange={onChangeHandler}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
