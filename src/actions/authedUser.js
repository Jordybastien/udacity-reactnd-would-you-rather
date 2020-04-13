import { SET_AUTHED_USER, LOGOUT_USER } from './types';

/**
 * @description set Authed Used action
 * @param  id User Id
 * @returns returns an object with the action type and the user Id
 */
export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};

/**
 * @description logs out the user
 * @returns returns an object with the action type
 */
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
