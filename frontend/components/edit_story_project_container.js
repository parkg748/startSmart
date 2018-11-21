import {connect} from 'react-redux';
import EditStoryProject from './edit_story_project';
import {logout} from '../actions/session_actions';
import {fetchProjects, updateProject, deleteProject, fetchProjectsByCurrentUser} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchProjectsByCurrentUser: userId => dispatch(fetchProjectsByCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryProject);
