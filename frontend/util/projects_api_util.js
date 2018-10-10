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

export const fetchProject = project => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${project}`
  });
};

export const createProject = project => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project }
  });
};

export const updateProject = project => {
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
