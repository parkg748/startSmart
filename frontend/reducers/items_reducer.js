import {RECEIVE_ITEM, RECEIVE_ALL_ITEMS} from '../actions/item_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return merge({}, state, action.item);
    default:
      return state;
  }
};
