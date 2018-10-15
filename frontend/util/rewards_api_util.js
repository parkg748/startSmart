import React from 'react';

export const fetchAllRewards = (user, project) => {
  return $.ajax({
    method: 'GET',
    url: `/api/${user}/projects/${project}/rewards`
  });
};

export const fetchReward = (user, project, reward) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects/${project}/rewards/${reward}`
  });
};

export const createProject = (user, project, data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${user}/projects/${project}/rewards`,
    data: { reward: data }
  });
};

export const updateReward = reward => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/rewards/${reward.id}`,
    data: { reward }
  });
};

export const deleteReward = reward => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/rewards/${reward}`
  });
};
