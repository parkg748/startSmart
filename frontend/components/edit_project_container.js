import {connect} from 'react-redux';
import EditProject from './edit_project';
import merge from 'lodash/merge';
import {fetchProject, updateProject} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    class: {
      titleWordCount: 60,
      shortBlurbWordCount: Object.values(state.entities.project).length > 0 ? (135 - Object.values(state.entities.project)[0].description.length) : 135,
      radioChecked: 'checked',
      category: '',
      subcategory: ''
    },
    project: state.entities.project,
    category: state.entities.category
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
