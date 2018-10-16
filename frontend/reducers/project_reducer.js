import {RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, action.project);
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
