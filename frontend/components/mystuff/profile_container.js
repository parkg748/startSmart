import {connect} from 'react-redux';
import Profile from './profile';
import {logout, fetchAllUsers} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    projects: state.entities.project,
    sessionId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
