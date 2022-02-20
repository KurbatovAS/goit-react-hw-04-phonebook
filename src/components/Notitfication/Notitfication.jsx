import PropTypes from 'prop-types';
import s from './Notitfication.module.css';

function Notitfication({ message }) {
  return <p className={s.test}>{message}</p>;
}

Notitfication.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notitfication;
