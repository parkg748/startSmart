import {connect} from 'react-redux';
import Category from './category';
import {logout} from '../actions/session_actions';
import {fetchProjects} from '../actions/project_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    user: state.entities.users,
    category: state.categories[ownProps.match.params.categoryId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
