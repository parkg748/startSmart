import {connect} from 'react-redux';
import EditProject from './edit_project';
import merge from 'lodash/merge';
import {fetchProject, updateProject} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    // project: {titleWordCount: 60, shortBlurbWordCount: (135 - Object.values(state.entities.project)[0]), radioChecked: 'checked'},
    user_id: Object.values(state.entities.users)[0].id,
    // project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    fetchProject: (user, project) => dispatch(fetchProject(user, project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
