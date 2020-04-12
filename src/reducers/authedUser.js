import { SET_AUTHED_USER, LOGOUT_USER } from '../actions/types';

/**
 * @description Questions Reducer
 * @param   state which is initialized to null
 * @param   action will receive action containing type and other necessary data
 * @returns object to make changes to the state authedUser
 */
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
