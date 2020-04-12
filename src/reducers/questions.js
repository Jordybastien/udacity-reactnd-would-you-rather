import { RECEIVE_QUESTIONS, ADD_QUESTION_RESPONSE } from "../actions/types";

/**
 * @description Questions Reducer
 * @param   state which is initialized to an empty object
 * @param   action will receive action containing type and other necessary data
 * @returns object to make changes to the state questions
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION_RESPONSE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
