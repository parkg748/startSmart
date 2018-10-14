import {RECEIVE_ALL_PROJECTS} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    debugger;
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    default:
      return state;
  }
};
