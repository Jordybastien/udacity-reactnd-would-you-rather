import { SET_CALL_BACK_LINK } from "./types";

/**
 * @description set callback link
 * @param link this is the callback link
 * @returns returns an object with the action type and the link
 */
export const setCallBackLink = (link) => {
  return {
    type: SET_CALL_BACK_LINK,
    link,
  };
};
