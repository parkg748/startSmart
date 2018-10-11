import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
  user: userReducer
});

export default entitiesReducer;
