import {connect} from 'react-redux';
import Account from './account';
import {logout, fetchUser} from '../../actions/session_actions';
import {fetchProjects, deleteProject} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
