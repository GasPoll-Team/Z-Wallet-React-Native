import * as actionTypes from '../actionTypes';

export const login = (token, id, email, fullname) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      token: token,
      id: id,
      email: email,
      fullname: fullname,
    },
  };
};

export const logout = (token, id) => {
  return {
    type: actionTypes.LOGOUT,
    payload: {
      token: token,
      id: id,
    },
  };
};
