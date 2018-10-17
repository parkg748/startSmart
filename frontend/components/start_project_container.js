import {connect} from 'react-redux';
import StartProject from './start_project';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users,
    user: state.entities.users,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartProject);
