import {
  RECEIVE_USERS,
  ALLOCATE_ANSWER_TO_USER,
  ALLOCATE_QUESTION_TO_USER,
} from "../actions/types";

/**
 * @description Questions Reducer
 * @param   state which is initialized to an empty object
 * @param   action will receive action containing type and other necessary data
 * @returns object to make changes to the state users
 */
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ALLOCATE_ANSWER_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ALLOCATE_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.qid])
        }
      };
    default:
      return state;
  }
}
