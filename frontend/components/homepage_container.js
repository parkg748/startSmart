import Homepage from './homepage';
import {connect} from 'react-redux';
import {receiveCurrentUser, logout, fetchUser, fetchAllUsers} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close', displayNone: 'error-email-msg', newNoteworthySection: 'navbar-black', popularSection: '', currentCategory: 'Film', filmBlack: 'navbar-black', artsBlack: '', designBlack: '', comicsBlack: '', gamesBlack: '', foodBlack: '', musicBlack: '', publishingBlack: ''},
    projects: state.entities.project,
    category: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
    fetchProjects: () => dispatch(fetchProjects()),
    logout: () => dispatch(logout()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
