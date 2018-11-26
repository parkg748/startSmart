import {RECEIVE_ALL_CURRENT_USER_PROJECTS, RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return Object.assign(action.projects);
    case RECEIVE_PROJECT:
      return newState[action.project.id] = action.project;
      // return Object.assign({}, state, action.project);
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
