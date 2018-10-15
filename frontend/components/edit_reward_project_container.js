import {connect} from 'react-redux';
import EditRewardProject from './edit_reward_project';
import {deleteReward} from '../actions/reward_actions';

const mapStateToProps = state => {
  return {
    reward: {title: '', description: '', pledge_amt: 0, month: '', year: 0, shipping: '', limit: false},
    user_id: Object.values(state.entities.users)[0].id,
    project_id: Object.values(state.entities.project)[0].id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReward: reward => dispatch(deleteReward(reward))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRewardProject);
