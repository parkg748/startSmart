import React from 'react';

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  });
};

export const fetchProjectsByCategory = category => {
  return $.ajax({
    method: 'GET',
    url: `/api/category/${category}/projects`
  });
};

export const fetchProjectsByCurrentUser = user => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects`
  });
};

export const fetchProject = (user, project) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user}/projects/${project}`
  });
};

export const createProject = (user, data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${user}/projects`,
    data: { project: data }
  });
};

export const updateProject = project => {
  debugger;
  const newProject = { ...project };
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project }
  });
};

export const deleteProject = project => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${project}`
  });
};
