import {connect} from 'react-redux';
import StartProject from './start_project';
import {createProject, fetchProjects, fetchProjectsByCurrentUser} from '../actions/project_actions';
import {logout, fetchUser} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close', searchBar: 'search-bar-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProject);
