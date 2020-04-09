import { RECEIVE_QUESTIONS } from './types';

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
