import React from 'react';
import Button from '../shared/Button';

const handleChange = () => {
  console.log('==> CLICKED HERE <==');
};
const Poll = () => {
  return (
    <div className='card-box'>
      <div className='card-heading'>
        <h5 className='font-weight-bold pl-3'>Sarah Edo asks:</h5>
      </div>
      <div className='poll-body'>
        <div className='border-right poll-avatar-body'>
          <img
            src='https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586285060/1o1zEDM_xvuzks.png'
            alt='logo'
            className='poll-avatar'
          />
        </div>
        <div className='login-form'>
          <div className='poll-question'>
            <h5 className='text-center'>Would you Rather?</h5>
            <span>... be a developer ... be a medicine doctor</span>
          </div>
          <Button
            goTo='/question'
            toExecute={handleChange}
            label='View Poll'
            classToUse='btn-outline-primary'
          />
        </div>
      </div>
    </div>
  );
};

export default Poll;
