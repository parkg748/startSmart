import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import projectReducer from './project_reducer';
import categoryReducer from './category_reducer';
import projectsReducer from './projects_reducer';
import rewardsReducer from './rewards_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  project: projectReducer,
  category: categoryReducer,
  projects: projectsReducer,
  rewards: rewardsReducer
});

export default entitiesReducer;
