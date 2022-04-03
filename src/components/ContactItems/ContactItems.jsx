import PropTypes from 'prop-types';
import s from './ContactItems.module.css';

function ContactItems ({contact, clickHandler}) {    
    const {name, number} = contact;

    return (
        <li className={s.item}>
            {name}: {number}
            <button
              type="button"
              name={name}
              className={s.button}
              onClick={clickHandler}
            >
              Delete
            </button>
          </li>
    )
}

ContactItems.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    clickHandler: PropTypes.func.isRequired,
}

export default ContactItems;