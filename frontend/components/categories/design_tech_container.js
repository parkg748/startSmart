import DesignTech from './design_tech';
import {connect} from 'react-redux';
import {logout, fetchAllUsers} from '../../actions/session_actions';
import {fetchProjects} from '../../actions/project_actions';
import {fetchCategories} from '../../actions/category_actions';

const mapStateToProps = state => {
  return {
    user: state.entities.users,
    projects: state.entities.project,
    category: state.entities.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    logout: () => dispatch(logout()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignTech);
