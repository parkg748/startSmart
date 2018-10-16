import React from 'react';

export const fetchItemsByReward = (user, project, reward) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects/${project}/rewards/${reward}/items`
  });
};

export const createItem = (user, project, reward, data) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects/${project}/rewards/${reward}/items`,
    data: { item: data }
  });
};

export const fetchItem = (user, project, reward, item) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects/${project}/rewards/${reward}/items/${item}`
  });
};
