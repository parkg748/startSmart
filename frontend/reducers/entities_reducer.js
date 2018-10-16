import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import projectReducer from './project_reducer';
import categoryReducer from './category_reducer';
import rewardsReducer from './rewards_reducer';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  project: projectReducer,
  category: categoryReducer,
  rewards: rewardsReducer,
  item: itemsReducer
});

export default entitiesReducer;
