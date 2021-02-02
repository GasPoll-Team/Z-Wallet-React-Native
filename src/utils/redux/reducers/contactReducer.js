import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    id: 0,
    image: '',
    name: '',
    phone: ''

};


const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SETCONTACT:
            return {
                ...state,
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                phone: action.payload.phone
            }
        default:
            return {
                ...state
            }
    }
};

export default contactReducer;