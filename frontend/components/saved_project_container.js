import {connect} from 'react-redux';
import SavedProject from './saved_project';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedProject);
