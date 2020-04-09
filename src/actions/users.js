import { RECEIVE_USERS } from './types';

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
