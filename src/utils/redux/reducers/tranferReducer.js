import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    receiver: 0,
    amount: 0,
    notes: ''
};

const tranferReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TRANFER:
            return {
                ...state,
                receiver: action.payload.receiver,
                amount: action.payload.amount,
                notes: action.payload.notes
            }
        default:
            return {
                ...state
            }
    }
}

export default tranferReducer;