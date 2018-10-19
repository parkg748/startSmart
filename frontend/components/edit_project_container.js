import {connect} from 'react-redux';
import EditProject from './edit_project';
import merge from 'lodash/merge';
import {fetchProject, updateProject, fetchProjects} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';
import {logout} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    class: {
      title: '',
      description: '',
      titleWordCount: 60,
      shortBlurbWordCount: 135,
      radioChecked: 'checked',
      category: '',
      subcategory: '',
      city: '',
      state: '',
      duration: 0,
      funding_goal: 0,
      displayProfileMenu: 'js-modal-close',
      addItem: 'js-modal-close',
      addBackground: ''
    },
    project: state.entities.project,
    category: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project)),
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
