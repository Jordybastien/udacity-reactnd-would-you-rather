import React from 'react';
import Button from '../shared/Button';
import { connect } from 'react-redux';
import { formatPoll } from '../../utils/helpers';

const Poll = (props) => {
  const { question } = props;
  return (
    <div className='card-box'>
      <div className='card-heading'>
        <h5 className='font-weight-bold pl-3'>{question.name} asks:</h5>
      </div>
      <div className='poll-body'>
        <div className='border-right poll-avatar-body'>
          <img
            src={question.avatarURL}
            alt={`avatar of ${question.name}`}
            className='poll-avatar'
          />
        </div>
        <div className='login-form'>
          <div className='poll-question'>
            <h5 className='text-center'>Would you Rather?</h5>
            <span>
              ... {question.optionOne.text} ... {question.optionTwo.text}
            </span>
          </div>
          <Button
            goTo={`/questions/${question.id}`}
            label='View Poll'
            classToUse='btn-outline-primary'
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  return {
    question: formatPoll(question, users[question.author]),
  };
};

export default connect(mapStateToProps)(Poll);
