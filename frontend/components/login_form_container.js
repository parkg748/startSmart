import {connect} from 'react-redux';
import {login} from '../actions/session_actions';
import {fetchCategories} from '../actions/category_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
  return {
    loginForm: {email: '', password: ''}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
