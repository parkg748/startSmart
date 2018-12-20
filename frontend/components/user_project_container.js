import {connect} from 'react-redux';
import UserProject from './user_project';
import {fetchProject, deleteProject} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';
import {fetchUser} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    category: state.entities.category,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    logout: () => dispatch(logout()),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
