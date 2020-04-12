import { showLoading, hideLoading } from "react-redux-loading";
import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION_RESPONSE,
  ADD_QUESTION,
} from "./types";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { assignUserAnswer, assignUserQuestion } from "./users";

/**
 * @description fetch Questions action
 * @param  questions receives questions
 * @returns returns an object with the action type and questions
 */
export const fetchQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

/**
 * @description vote on a poll, choose one option
 * @param  Object receives an object with the authenticated user, questionId and the answer
 * @returns returns an object with the action type and auther user, questionId and the answer
 */
const votePoll = ({ authedUser, qid, answer }) => {
  return {
    type: ADD_QUESTION_RESPONSE,
    authedUser,
    qid,
    answer,
  };
};

/**
 * @description Function will handle votes and assigning them to a user
 * @param  Object receives an object with the authenticated user, questionId and the answer
 * @returns dispatches action to votePoll and assign answer to user
 */
export const handleVote = (info) => {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(votePoll(info));
        dispatch(assignUserAnswer(info));
        dispatch(hideLoading());
      })
      .catch((e) => {
        alert("There was an error voting");
      });
  };
};

/**
 * @description record a poll
 * @param  Object receives an object containing the options to choose from
 * @returns returns an object with the action type and the question
 */
const recordQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

/**
 * @description Function will handle questions
 * @param  Object receives an object with the question details
 * @returns dispatches action to record question and assign question to the user
 */
export const handleNewQuestion = ({ optionOneText, optionTwoText }) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(recordQuestion(question));
        const { author: authedUser, id: qid } = question;
        dispatch(assignUserQuestion({ authedUser, qid }));
      })
      .then(() => dispatch(hideLoading()));
  };
};
