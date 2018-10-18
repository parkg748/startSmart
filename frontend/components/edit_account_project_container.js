import {connect} from 'react-redux';
import EditAccountProject from './edit_account_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    users: state.entities.users,
    project: state.entities.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountProject);
