import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBProgress } from "mdbreact";
import { Redirect } from "react-router-dom";
import { formatPoll } from "../../utils/helpers";
import { handleVote } from "../../actions/questions";

class Question extends Component {
  state = {
    answer: "",
  };

  /**
   * @description handle changes from the selected answer
   * @param  e receives event
   * @returns it changes the state of the answer
   */
  handleChange = (e) => {
    return this.setState({ answer: e.target.value });
  };

  /**
   * @description handle form submission
   * @param  e receives event
   * @returns dispatches a vote handler and allocate answer to user handler
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { answer } = this.state;
    const {
      authedUser,
      question: { id: qid },
      dispatch
    } = this.props;
    this.setState({ answer: '' });
    dispatch(handleVote({ authedUser, qid, answer }));
  };

  render() {
    const { didUserAnswer, isAuth, question, isOptionOne } = this.props;
    const { answer } = this.state;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }
    const opOneVotes = question && question.optionOne.votes.length;
    const opTwoVotes = question && question.optionTwo.votes.length;
    const totalVotes = question && opOneVotes + opTwoVotes;
    const opOnePercentage = question && Math.round((opOneVotes * 100) / totalVotes);
    const opTwoPercentage = question && Math.round((opTwoVotes * 100) / totalVotes);

    return didUserAnswer ? (
      <div className="container">
        <div className="col-md-6 mx-auto my-auto">
          <div className="card-box">
            <div className="card-heading">
              <h5 className="font-weight-bold pl-3">
                Asked by {question.name}:
              </h5>
            </div>
            <div className="poll-body">
              <div className="border-right question-avatar-body">
                <img
                  src={question.avatarURL}
                  alt={`avatar of ${question.name}`}
                  className="result-avatar"
                />
              </div>
              <div className="side-box">
                <div className="poll-question">
                  <h5 className="font-weight-bold">Results</h5>
                  <div
                    className={`poll-answer mb-5 ${
                      isOptionOne && `answered-poll`
                    }`}
                  >
                    {isOptionOne && (
                      <div className="answered-poll-container">
                        <span className="answered-poll-label">Voted</span>
                      </div>
                    )}
                    <span className="font-weight-bold">
                      Would you rather {question.optionOne.text}
                    </span>
                    <MDBProgress
                      material
                      value={opOnePercentage}
                      height="30px"
                      className="my-3"
                    >
                      {opOnePercentage}%
                    </MDBProgress>
                    <span className="font-weight-bold text-center">
                      {opOneVotes} of {totalVotes} answers
                    </span>
                  </div>
                  <div
                    className={`poll-answer mb-5 ${
                      !isOptionOne && `answered-poll`
                    }`}
                  >
                    {!isOptionOne && (
                      <div className="answered-poll-container-option">
                        <span className="answered-poll-label">Voted</span>
                      </div>
                    )}
                    <span className="font-weight-bold">
                      Would you rather {question.optionTwo.text}
                    </span>
                    <MDBProgress
                      material
                      value={opTwoPercentage}
                      height="30px"
                      className="my-3"
                    >
                      {opTwoPercentage}%
                    </MDBProgress>
                    <span className="font-weight-bold text-center">
                      {opTwoVotes} of {totalVotes} answers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="col-md-6 mx-auto my-auto">
          <div className="card-box">
            <div className="card-heading">
              <h5 className="font-weight-bold pl-3">{question.name} asks:</h5>
            </div>
            <div className="poll-body">
              <div className="border-right question-avatar-body my-auto">
                <img
                  src={question.avatarURL}
                  alt={`avatar of ${question.name}`}
                  className="question-avatar"
                />
              </div>
              <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="poll-question">
                    <h5 className="font-weight-bold text-center">
                      Would you Rather?
                    </h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="optionOne"
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">
                        {question.optionOne.text}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="optionTwo"
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">
                        {question.optionTwo.text}
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-block custom-btn"
                    type="submit"
                    disabled={answer === ""}
                  >
                    Submit
                  </button>
                </form>
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
      user && question && Object.keys(user.answers).includes(question.id),
    isAuth: authedUser !== null,
    question: user && question && formatPoll(question, users[question.author]),
    isOptionOne: user && user.answers[id] === "optionOne",
    authedUser,
  };
};

export default connect(mapStateToProps)(Question);
