import {connect} from 'react-redux';
import {login, clearErrors, receiveErrors} from '../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
  return {
    loginForm: {email: '', password: '',
                emailError: 'error-email-msg',
                displayProfileMenu: 'js-modal-close',
                addItem: 'js-modal-close',
                addBackground: ''},
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
