import {connect} from 'react-redux';
import SignupForm from './signup_form';
import {signup, receiveErrors, clearErrors} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    signupForm: {name: '', email: '', reemail: '', password: '', repassword: '', emailError: 'error-email-msg', errorBox: ''},
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
