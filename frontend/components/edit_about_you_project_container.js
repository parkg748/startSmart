import {connect} from 'react-redux';
import EditAboutYouProject from './edit_about_you_project';
import {logout} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    aboutYou: {displayProfileMenu: 'js-modal-close', name: '', biography: '', websites: '', google_analytics: ''},
    user: state.entities.users,
    project: state.entities.project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAboutYouProject);
