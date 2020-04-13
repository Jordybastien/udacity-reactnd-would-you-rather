import React from 'react';
import { connect } from 'react-redux';

const LeaderBox = (props) => {
  const { user, numOfQuestions, numOfAnswers, index } = props;

  return (
    <div className='card-box'>
      <span className='triangle-topleft'></span>
      <span className='user-rank'>{index}</span>
      <div className='poll-body'>
        <div className='border-right lead-avatar-body'>
          <img
            src={user.avatarURL}
            alt={`avatar of ${user.name}`}
            className='poll-avatar mt-4'
          />
        </div>
        <div className='lead-board border-right'>
          <h5 className='font-weight-bold pl-3 mb-3'>{user.name}</h5>
          <div className='poll-question'>
            <div className='statistics border-bottom mb-3 pb-3'>
              <span className='font-weight-bold'>Answered Questions</span>
              <span className='font-weight-bold float-right'>
                {numOfAnswers}
              </span>
            </div>
            <div className='statistics'>
              <span className='font-weight-bold'>Created Questions</span>
              <span className='font-weight-bold float-right'>
                {numOfQuestions}
              </span>
            </div>
          </div>
        </div>
        <div className='lead-score'>
          <div className='card-heading'>
            <h5 className='font-weight-bold pl-3'>Score</h5>
          </div>
          <div className='score-label'>
            <h5 className='score text-center'>
              {numOfAnswers + numOfQuestions}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { id, index }) => {
  const user = users[id];

  return {
    user,
    index,
    numOfQuestions: user && user.questions.length,
    numOfAnswers: user && Object.keys(user.answers).length,
  };
};

export default connect(mapStateToProps)(LeaderBox);
