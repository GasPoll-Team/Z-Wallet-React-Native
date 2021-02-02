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

<<<<<<< HEAD
=======
export const setEmailForgot = (email) =>{
  return {
    type:actionTypes.SETEMAIL,
    payload:{
      email:email
    }
  }
}

export const rmEmail = () =>{
  return {
    type:actionTypes.RMEMAIL,
  }
}

>>>>>>> 061bb1784081ee2f31b4b058e38e0c8b9a3a083c
export const logout = (token, id) => {
  return {
    type: actionTypes.LOGOUT,
    payload: {
      token: token,
      id: id,
    },
  };
};
