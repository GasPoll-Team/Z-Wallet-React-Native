import { combineReducers } from 'redux';

import authReducer from './authReducer';
import contactReducer from './contactReducer'
import myData from './myDataReducer'
import tranferState from './tranferReducer'

const reducers = combineReducers({
    authReducer: authReducer,
    contactReducer:contactReducer,
    myDataReducer:myData,
    tranferReducer:tranferState
})

export default reducers;