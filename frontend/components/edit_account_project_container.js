import {connect} from 'react-redux';
import EditAccountProject from './edit_account_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    user_id: Object.values(state.entities.users)[0].id,
    project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountProject);
