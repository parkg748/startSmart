import {connect} from 'react-redux';
import BackedProject from './backed_project';
import {logout, fetchUser} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close', searchBar: 'search-bar-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackedProject);
