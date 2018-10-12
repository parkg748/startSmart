import {connect} from 'react-redux';
import UserProject from './user_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users.name
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
