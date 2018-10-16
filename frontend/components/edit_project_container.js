import {connect} from 'react-redux';
import EditProject from './edit_project';
import merge from 'lodash/merge';
import {fetchProject, updateProject} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    class: {titleWordCount: 60, shortBlurbWordCount: (135 - Object.values(state.entities.project)[0].description.length), radioChecked: 'checked', category: '', subcategory: ''},
    user_id: Object.values(state.entities.users)[0].id,
    project: state.entities.project
    // project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
