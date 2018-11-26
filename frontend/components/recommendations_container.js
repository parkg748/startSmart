import {connect} from 'react-redux';
import Recommendations from './recommendations';
import {logout} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';
import {fetchAllUsers, fetchUser} from '../actions/session_actions';

const mapStateToProps = state => {
  let projects = Object.values(state.entities.project).length === 0 ? null : state.entities.project;
  let categories = Object.values(state.entities.category).length === 0 ? null : state.entities.category;
  let users = Object.values(state.entities.users).length === 0 ? null : state.entities.users;
  return {
    user: state.entities.users[state.session.id],
    class: {display: 'location-none-display', displayProfileMenu: 'js-modal-close'},
    projects: projects,
    categories: categories,
    users: users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
