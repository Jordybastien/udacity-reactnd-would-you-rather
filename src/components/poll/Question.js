import React from 'react';
import Button from '../shared/Button';

const handleChange = () => {
  console.log('==> CLICKED HERE <==');
};
const Question = () => {
  return (
    <div className='container'>
      <div className='col-md-6 mx-auto my-auto'>
        <div className='card-box'>
          <div className='card-heading'>
            <h5 className='font-weight-bold pl-3'>Sarah Edo asks:</h5>
          </div>
          <div className='poll-body'>
            <div className='border-right question-avatar-body my-auto'>
              <img
                src='https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586285060/1o1zEDM_xvuzks.png'
                alt='logo'
                className='question-avatar'
              />
            </div>
            <div className='login-form'>
              <div className='poll-question'>
                <h5 className='font-weight-bold text-center'>
                  Would you Rather?
                </h5>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    value='option2'
                  />
                  <label className='form-check-label'>be a developer</label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    value='option2'
                  />
                  <label className='form-check-label'>
                    be a medicine doctor
                  </label>
                </div>
              </div>
              <Button
                goTo='/result'
                toExecute={handleChange}
                label='Submit'
                classToUse='btn-primary'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
