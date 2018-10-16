import {connect} from 'react-redux';
import EditAccountProject from './edit_account_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    users: state.entities.users,
    project: state.entities.project
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountProject);
