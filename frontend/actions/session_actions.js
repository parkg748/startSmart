import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

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

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userForm => dispatch => (
  APIUtil.fetchUser(userForm).then(user => dispatch(receiveCurrentUser(user)))
);

export const updateUser = userForm => dispatch => (
  APIUtil.updateUser(userForm).then(user => dispatch(receiveCurrentUser(user)))
);
