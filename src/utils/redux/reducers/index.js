import { combineReducers } from 'redux';

import authReducer from './authReducer';
import contactReducer from './contactReducer'
import myData from './myDataReducer'

const reducers = combineReducers({
    authReducer: authReducer,
    contactReducer:contactReducer,
    myDataReducer:myData
})

export default reducers;