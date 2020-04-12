import { showLoading, hideLoading } from "react-redux-loading";
import { RECEIVE_QUESTIONS, ADD_QUESTION_RESPONSE } from "./types";
import { saveQuestionAnswer } from "../utils/api";
import { assignUserAnswer } from "./users";

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
export const votePoll = ({ authedUser, qid, answer }) => {
  return {
    type: ADD_QUESTION_RESPONSE,
    authedUser,
    qid,
    answer,
  };
};

/**
 * @description Function will handle optimistic update on vote
 * @param  Object receives an object with the authenticated user, questionId and the answer
 * @returns dispatches action to votePoll and save question answer
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
