import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {
  session: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.user.session);
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, {session: null});
    default:
      return state;
  }
};
