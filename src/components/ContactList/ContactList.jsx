import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItems from '../ContactItems';

function ContactList({ contacts, removeHandler }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <ContactItems key={contact.id} contact={contact} clickHandler={removeHandler} />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  
    }).isRequired
  ).isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default ContactList;
