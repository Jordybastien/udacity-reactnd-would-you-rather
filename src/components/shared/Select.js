import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, onChange }) => {
  return (
    <div className='my-2'>
      <select className='form-control' value='user' onChange={onChange}>
        <option value='user' disabled>
          Select User
        </option>
        {options.map(({user, image}) => (
          <option key={user} value={user} style={{background:image}}>{user}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
