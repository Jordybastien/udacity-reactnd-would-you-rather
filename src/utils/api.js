import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

/**
 * @description Function will handle fetching initial data
 * @returns returns an object containing users and questions
 */
export const getInitialData = async () => {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
};

/**
 * @description Function will handle recording question
 * @param  Object receives an object with data to be recorded
 * @returns saves question
 */
export const saveQuestion = (data) => {
  return _saveQuestion(data);
};

/**
 * @description Function will handle recording question's answers
 * @param  Object receives an object with data to be recorded
 * @returns saves question's answers
 */
export const saveQuestionAnswer = (data) => {
  return _saveQuestionAnswer(data);
};
