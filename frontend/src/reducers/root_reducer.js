import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import ErrorsReducer from './errors_reducer'

import uiReducer from './ui_reducer';

// import SessionErrorsReducer from './session_errors_reducer';


const RootReducer = combineReducers({
    session: sessionApiReducer,
    errors: ErrorsReducer, 
    ui: uiReducer,
})


export default RootReducer;



