import {connect} from 'react-redux';
import EditStoryProject from './edit_story_project';
import {logout} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    class: {displayProfileMenu: 'js-modal-close'}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryProject);
