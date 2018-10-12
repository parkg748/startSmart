import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import projectReducer from './project_reducer';
import categoryReducer from './category_reducer';

const entitiesReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  category: categoryReducer
});

export default entitiesReducer;
