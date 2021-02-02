
import * as actionTypes from '../actionTypes';

export const setReceiver = (data) =>{
    return {
      type:actionTypes.SETCONTACT,
      payload:data
    }
  }