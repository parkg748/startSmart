import { connect } from 'react-redux';
import Pledge from './pledge';
import { fetchProject } from '../actions/project_actions';
import { fetchUser } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    project: state.entities.project,
    user: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (project, id) => dispatch(fetchProject(project, id)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pledge);
