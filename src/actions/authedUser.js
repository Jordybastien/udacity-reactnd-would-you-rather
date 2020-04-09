import { SET_AUTHED_USER } from './types';

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
