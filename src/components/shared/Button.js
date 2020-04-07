import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ goTo, toExecute, label }) => {
  return (
    <Link to={goTo} className='btn btn-primary btn-lg btn-block' onClick={toExecute}>
      {label}
    </Link>
  );
};

Button.propTypes = {
  goTo: PropTypes.string.isRequired,
  toExecute: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
