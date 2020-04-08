import React from 'react';
import { MDBProgress } from 'mdbreact';

const Result = () => {
  return (
    <div className='container'>
      <div className='col-md-6 mx-auto my-auto'>
        <div className='card-box'>
          <div className='card-heading'>
            <h5 className='font-weight-bold pl-3'>Asked by Sarah Edo:</h5>
          </div>
          <div className='poll-body'>
            <div className='border-right question-avatar-body'>
              <img
                src='https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586285060/1o1zEDM_xvuzks.png'
                alt='logo'
                className='result-avatar'
              />
            </div>
            <div className='side-box'>
              <div className='poll-question'>
                <h5 className='font-weight-bold'>Results</h5>
                <div className='poll-answer answered-poll'>
                  <div className='answered-poll-container'>
                    <span className='answered-poll-label'>Voted</span>
                  </div>
                  <span className='font-weight-bold'>
                    Would you rather be a developer ?
                  </span>
                  <MDBProgress
                    material
                    value={50}
                    height='30px'
                    className='my-3'
                  >
                    50%
                  </MDBProgress>
                  <span className='font-weight-bold text-center'>
                    1 of 2 answers
                  </span>
                </div>
                <div className='poll-answer'>
                  <span className='font-weight-bold'>
                    Would you rather be a developer ?
                  </span>
                  <MDBProgress
                    material
                    value={50}
                    height='30px'
                    className='my-3'
                  >
                    50%
                  </MDBProgress>
                  <span className='font-weight-bold text-center'>
                    1 of 2 answers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
