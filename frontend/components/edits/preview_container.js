import {connect} from 'react-redux';
import Preview from './preview';
import {logout, fetchUser} from '../../actions/session_actions';
import {fetchProject, fetchProjects} from '../../actions/project_actions';
import {fetchCategories} from '../../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    project: state.entities.project,
    category: state.entities.category,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
