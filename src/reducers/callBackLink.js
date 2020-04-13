import { SET_CALL_BACK_LINK } from "../actions/types";

/**
 * @description call back link Reducer
 * @param   state which is initialized to null
 * @param   action will receive action containing type and link
 * @returns object to make changes to the state link
 */
export default function callBackLink(state = null, action) {
  switch (action.type) {
    case SET_CALL_BACK_LINK:
      return action.link;
    default:
      return state;
  }
}
