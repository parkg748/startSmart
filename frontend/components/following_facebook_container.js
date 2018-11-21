import {connect} from 'react-redux';
import FollowingFacebook from './following_facebook';
import {logout} from '../actions/session_actions';
import {fetchProjects, fetchProjectsByCurrentUser} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
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

export default connect(mapStateToProps, mapDispatchToProps)(FollowingFacebook);
