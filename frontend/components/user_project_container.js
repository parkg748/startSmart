import {connect} from 'react-redux';
import UserProject from './user_project';
import {fetchProject, fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    category: state.entities.category,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
