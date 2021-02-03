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

export const setEmailForgot = (email) => {
  return {
    type: actionTypes.SETEMAIL,
    payload: {
      email: email,
    },
  };
};

export const rmEmail = () => {
  return {
    type: actionTypes.RMEMAIL,
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
