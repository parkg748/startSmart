import Homepage from './homepage';
import {connect} from 'react-redux';
import {receiveCurrentUser, logout, fetchUser, fetchAllUsers, updateUser} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    projects: state.entities.project,
    category: state.entities.category,
    sessionId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
    fetchProjects: () => dispatch(fetchProjects()),
    logout: () => dispatch(logout()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
