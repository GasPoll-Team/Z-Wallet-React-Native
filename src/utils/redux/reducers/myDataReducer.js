import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    id: 0,
    image: '',
    name: '',
    phone: '',
    balance:0

};


const myData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SETMYDATA:
            return {
                ...state,
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                phone: action.payload.phone,
                balance:action.payload.balance
            }
        default:
            return {
                ...state
            }
    }
};

export default myData;