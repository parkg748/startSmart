import {connect} from 'react-redux';
import {createBasics} from '../actions/basics_actions';
import BasicsForm from './basics_form_container';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBasics: project => dispatch(createBasics(project)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicsForm);
