import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = userForm => dispatch => (
  APIUtil.signup(userForm).then(user => (dispatch(receiveCurrentUser(user))), error => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = userForm => dispatch => (
  APIUtil.login(userForm).then(user => (dispatch(receiveCurrentUser(user))), error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = userForm => dispatch => (
  APIUtil.logout(userForm).then(() => dispatch(receiveCurrentUser(null)))
);
