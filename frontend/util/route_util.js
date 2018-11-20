import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const Protected = ({component: Component, path, loggedIn}) => {
  debugger;
  return (
    <Route path={path} render={props => (
      !loggedIn ? <Component {...props} /> : <Redirect to='/login' />
    )} />
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
