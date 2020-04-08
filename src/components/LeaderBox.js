import React from 'react';

const LeaderBox = () => {
  return (
    <div className='container'>
      <div className='col-md-6 mx-auto my-auto'>
        <div className='card-box'>
          <div className='poll-body'>
            <div className='border-right lead-avatar-body'>
              <img
                src='https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586285060/1o1zEDM_xvuzks.png'
                alt='logo'
                className='poll-avatar mt-4'
              />
            </div>
            <div className='lead-board border-right'>
              <h5 className='font-weight-bold pl-3 mb-3'>Sarah Edo asks:</h5>
              <div className='poll-question'>
                <div className='statistics border-bottom mb-3 pb-3'>
                  <span className='font-weight-bold'>Answered Questions</span>
                  <span className='font-weight-bold float-right'>7</span>
                </div>
                <div className='statistics'>
                  <span className='font-weight-bold'>Created Questions</span>
                  <span className='font-weight-bold float-right'>3</span>
                </div>
              </div>
            </div>
            <div className='lead-score'>
              <div className='card-heading'>
                <h5 className='font-weight-bold pl-3'>Score</h5>
              </div>
              <div className='score-label'>
                <h5 className='score text-center'>10</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBox;
