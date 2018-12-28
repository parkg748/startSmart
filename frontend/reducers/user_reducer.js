import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ALL_USERS} from '../actions/session_actions';

const _nullSession = {
  user: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign(action.users);
    case RECEIVE_CURRENT_USER:
      return Object.values(newState).filter(el => el.id === action.session.id)[0];
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, {currentUser: null});
    default:
      return state;
  }
};
