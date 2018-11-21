import {connect} from 'react-redux';
import EditAccountProject from './edit_account_project';
import {logout} from '../actions/session_actions';
import {fetchProjects, fetchProjectsByCurrentUser} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    users: state.entities.users,
    project: state.entities.project,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountProject);
