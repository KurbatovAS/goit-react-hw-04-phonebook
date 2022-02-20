import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, removeHandler }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              name={contact.name}
              className={s.button}
              onClick={removeHandler}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default ContactList;
