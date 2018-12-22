import {connect} from 'react-redux';
import StartProjectPageOne from './start_project_pageone';
import {createProject, fetchProjects, fetchProjectsByCurrentUser} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';
import {fetchUser} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users,
    categories: state.entities.category,
    user: state.entities.users,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (user, project) => dispatch(createProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProjectPageOne);
