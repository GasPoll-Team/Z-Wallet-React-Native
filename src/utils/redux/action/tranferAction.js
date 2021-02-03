import * as actionTypes from '../actionTypes';

export const setTranfer = (obj) =>{
    return {
        type:actionTypes.TRANFER,
        payload:obj
      }
}