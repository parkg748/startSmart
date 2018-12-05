import {connect} from 'react-redux';
import ProjectView from './project_view';
import {logout, fetchAllUsers} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    category: state.entities.category,
    class: {displayProfileMenu: 'js-modal-close', addBackground: '', userInfoModal: 'js-modal-close', onClick: 'make-a-pledge'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
