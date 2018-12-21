import {connect} from 'react-redux';
import Notifications from './notifications';
import {logout, fetchUser} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
