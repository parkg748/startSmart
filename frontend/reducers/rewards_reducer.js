import {RECEIVE_ALL_REWARDS, RECEIVE_REWARD, REMOVE_REWARD} from '../actions/reward_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_REWARDS:
      return merge({}, state, action.rewards);
    case RECEIVE_REWARD:
      return merge({}, state, action.reward);
    case REMOVE_REWARD:
      return {};
    default:
      return state;
  }
};
