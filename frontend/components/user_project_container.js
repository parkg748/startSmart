import {connect} from 'react-redux';
import UserProject from './user_project';
import {fetchProject} from '../actions/project_actions';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users[state.session.id],
    project: state.entities.project,
    category: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
