import {connect} from 'react-redux';
import EditProject from './edit_project';
import {updateProject, fetchProject, deleteProject, fetchProjectsByCurrentUser} from '../actions/project_actions';
import {logout} from '../actions/session_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    category: state.entities.category,
    project: state.entities.project,
    user: state.entities.users,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    logout: () => dispatch(logout()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProject: (project, id) => dispatch(fetchProject(project, id)),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
