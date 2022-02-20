import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ onFilterInputHandler, filterValue }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="John Smith"
        value={filterValue}
        onInput={onFilterInputHandler}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterInputHandler: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};

export default Filter;
