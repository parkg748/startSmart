import {connect} from 'react-redux';
import EditRewardProject from './edit_reward_project';
import {deleteReward} from '../../actions/reward_actions';
import {fetchProject, fetchProjects, deleteProject} from '../../actions/project_actions';
import {createItem} from '../../actions/item_actions';
import {logout, fetchUser} from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    project: state.entities.project,
    user: state.entities.users,
    session: state.session
    // project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReward: reward => dispatch(deleteReward(reward)),
    fetchProject: (user, project) => dispatch(fetchProject(user, project)),
    createItem: (user, project, reward, data) => dispatch(createItem(user, project, reward, data)),
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: project => dispatch(deleteProject(project)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRewardProject);
