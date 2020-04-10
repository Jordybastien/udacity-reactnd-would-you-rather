import React, { Component } from 'react';
import Button from '../shared/Button';
import { connect } from 'react-redux';
import { MDBProgress } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import { formatPoll } from '../../utils/helpers';

class Question extends Component {
  render() {
    const { didUserAnswer, isAuth, question } = this.props;

    if (!isAuth) {
      return <Redirect to='/login' />;
    }
    console.log('==> QUESTION ', question);

    return didUserAnswer ? (
      <div className='container'>
        <div className='col-md-6 mx-auto my-auto'>
          <div className='card-box'>
            <div className='card-heading'>
              <h5 className='font-weight-bold pl-3'>
                Asked by {question.name}:
              </h5>
            </div>
            <div className='poll-body'>
              <div className='border-right question-avatar-body'>
                <img
                  src={question.avatarURL}
                  alt={`avatar of ${question.name}`}
                  className='result-avatar'
                />
              </div>
              <div className='side-box'>
                <div className='poll-question'>
                  <h5 className='font-weight-bold'>Results</h5>
                  <div className='poll-answer mb-5 answered-poll'>
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
    ) : (
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
                  label='Submit'
                  classToUse='btn-primary'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { question_id: id } = props.match.params;
  const question = questions[id];
  const user = users[authedUser];

  return {
    didUserAnswer:
      user && question ? Object.keys(user.answers).includes(question.id) : null,
    isAuth: authedUser !== null,
    question:
      user && question ? formatPoll(question, users[question.author]) : null,
  };
};

export default connect(mapStateToProps)(Question);
