import {connect} from 'react-redux';
import SignupForm from './signup_form';
import {receiveErrors, clearErrors} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    signupForm: {name: '', email: '', reemail: '', password: '', repassword: '', emailError: 'error-email-msg'},
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
