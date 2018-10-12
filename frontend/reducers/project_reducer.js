import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return Object.merge({}, {project: action.project.project});
    default:
      return state;
  }
};
