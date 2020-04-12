import { RECEIVE_USERS, ALLOCATE_ANSWER_TO_USER } from './types';

/**
 * @description fetch Users action
 * @param  users receives users
 * @returns returns an object with the action type and users
 */
export const fetchUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

/**
 * @description assign answer to user
 * @param  Object receives an object with the authenticated user, questionId and the answer
 * @returns returns an object with the action type and auther user, questionId and the answer
 */
export const assignUserAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: ALLOCATE_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  }
};
