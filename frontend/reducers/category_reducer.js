import {RECEIVE_CATEGORY, RECEIVE_ALL_CATEGORIES} from '../actions/category_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_CATEGORY:
      return action.category;
    default:
      return state;
  }
}
