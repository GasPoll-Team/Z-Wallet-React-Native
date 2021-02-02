import * as actionTypes from '../actionTypes';

export const setDataUser = (obj) =>{
    return {
        type:actionTypes.SETMYDATA,
        payload:obj
      }
}