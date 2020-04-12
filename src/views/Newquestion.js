import React, { Component } from "react";
import { connect } from "react-redux";
import TextBox from "../components/shared/TextBox";
import { Redirect, withRouter } from "react-router-dom";
import { handleNewQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  /**
   * @description handle changes from optionOne textbox
   * @param  e receives event
   * @returns it changes the state  of the optionOneText to the new value
   */
  handleOpOne = (e) => this.setState({ optionOneText: e.target.value });

  /**
   * @description handle changes from optionTwo textbox
   * @param  e receives event
   * @returns it changes the state  of the optionTwoText to the new value
   */
  handleOpTwo = (e) => this.setState({ optionTwoText: e.target.value });

  /**
   * @description handle form submission
   * @param  e receives event
   * @returns it dispactches a function to handle new question and redirects user to homepage
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleNewQuestion({ optionOneText, optionTwoText }));
    return this.props.history.push('/');
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const { isAuth } = this.props;

    if (!isAuth) {
      return <Redirect to='/login' />;
    }
    return (
      <div className="container">
        <div className="col-md-6 mx-auto my-auto">
          <div className="card-box">
            <div className="card-heading">
              <h5 className="font-weight-bold pl-3 text-center">
                Create Question
              </h5>
            </div>
            <div className="poll-body">
              <div className="side-box">
                <div className="poll-question">
                  <span>Complete the question</span>
                  <h5 className="font-weight-bold mt-5">Would you Rather?</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <TextBox
                    type="text"
                    placeholder="Enter option two text here"
                    value={optionOneText}
                    name="optionOneText"
                    onChange={this.handleOpOne}
                  />
                  <p className="line-on-side">
                    <span className="line-span text-center">OR</span>
                  </p>
                  <TextBox
                    type="text"
                    placeholder="Enter option two text here"
                    value={optionTwoText}
                    name="optionTwoText"
                    onChange={this.handleOpTwo}
                  />
                  <button
                    className="btn btn-primary btn-block custom-btn"
                    type="submit"
                    disabled={optionOneText === "" || optionTwoText === ""}
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

const mapStateToProps = ({ authedUser }) => {
  return {
    isAuth: authedUser !== null,
  };
};

export default withRouter(connect(mapStateToProps)(NewQuestion));
