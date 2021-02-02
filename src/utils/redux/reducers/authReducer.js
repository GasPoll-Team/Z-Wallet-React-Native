import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  token: null,
  id: null,
  // pin: null,
  email: '',
  fullname: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        id: action.payload.id,
        email: action.payload.email,
        fullname: action.payload.fullname,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
      };
    case actionTypes.SETEMAIL:
      return {
        ...state,
        email: action.payload.email
      }

    case actionTypes.RMEMAIL:
      return {
        ...state,
        email: ''
      }

    default:
      return state;
  }
};

export default authReducer;
