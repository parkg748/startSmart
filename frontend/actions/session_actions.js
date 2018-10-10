import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = userForm => dispatch => (
  APIUtil.signup(userForm).then(user => {dispatch(receiveCurrentUser(user)); dispatch(clearErrors());}, error => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = userForm => dispatch => (
  APIUtil.login(userForm).then(user => {dispatch(receiveCurrentUser(user)); dispatch(clearErrors());}, error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = userForm => dispatch => (
  APIUtil.logout(userForm).then(() => dispatch(receiveCurrentUser(null)))
);
