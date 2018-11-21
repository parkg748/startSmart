import {connect} from 'react-redux';
import EditAboutYouProject from './edit_about_you_project';
import {logout, updateUser} from '../actions/session_actions';
import {fetchProjects, updateProject, deleteProject, fetchProjectsByCurrentUser} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    aboutYou: {displayProfileMenu: 'js-modal-close', name: '', biography: '', websites: '', google_analytics: '', profileUrl: "", profileFile: "", profileUpload: 'close'},
    user: state.entities.users,
    project: state.entities.project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    updateUser: user => dispatch(updateUser(user)),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAboutYouProject);
