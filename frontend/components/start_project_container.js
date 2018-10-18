import {connect} from 'react-redux';
import StartProject from './start_project';
import {createProject, fetchProjects} from '../actions/project_actions';
import {logout} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users,
    user: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProject);
