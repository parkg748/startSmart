import {connect} from 'react-redux';
import EditAccountProject from './edit_account_project';
import {logout, fetchUser} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';

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
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountProject);
