import {connect} from 'react-redux';
import EditAboutYouProject from './edit_about_you_project';
import {logout, updateUser, fetchUser} from '../../actions/session_actions';
import {fetchProjects, updateProject, deleteProject} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    updateUser: user => dispatch(updateUser(user)),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAboutYouProject);
