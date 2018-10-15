import {connect} from 'react-redux';
import EditProject from './edit_project';
import merge from 'lodash/merge';
import {updateProject} from '../actions/project_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    project: merge({}, Object.values(state.entities.project)[0], {titleWordCount: 60, shortBlurbWordCount: (135 - Object.values(state.entities.project)[0].description.length), radioChecked: 'checked'}),
    user_id: Object.values(state.entities.users)[0].id,
    project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
