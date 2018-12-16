import {connect} from 'react-redux';
import EditProfile from './edit_profile';
import {logout, fetchUser, updateUser} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
