import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {
  user: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {user: action.currentUser.user});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, {currentUser: null});
    default:
      return state;
  }
};
