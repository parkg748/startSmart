import {connect} from 'react-redux';
import BasicsForm from './basics_form';
import {logout} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicsForm);
