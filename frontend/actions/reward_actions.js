import * as RewardApiUtil from '../util/rewards_api_util';

export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';

const receiveAllRewards = rewards => ({
  type: RECEIVE_ALL_REWARDS,
  rewards
});

const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

const removeReward = reward => ({
  type: REMOVE_REWARD,
  rewardId: reward.id
});

export const fetchAllRewards = (user, project) => dispatch => (
  RewardApiUtil.fetchAllRewards(user, project).then(rewards => dispatch(receiveAllRewards(rewards)))
);

export const fetchReward = (user, project, rewardForm) => dispatch => (
  RewardApiUtil.fetchReward(user, project, rewardForm).then(reward => dispatch(receiveReward(reward)))
);

export const createProject = (user, project, data) => dispatch => (
  RewardApiUtil.createProject(user, project, data).then(reward => dispatch(receiveReward(reward)))
);

export const updateReward = rewardForm => dispatch => (
  RewardApiUtil.updateReward(rewardForm).then(reward => dispatch(receiveProject(reward)))
);

export const deleteReward = rewardForm => dispatch => (
  RewardApiUtil.deleteReward(rewardForm).then(reward => dispatch(removeReward(reward)))
);
