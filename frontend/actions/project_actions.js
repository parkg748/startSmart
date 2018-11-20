import * as ProjectApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_ALL_CURRENT_USER_PROJECTS = 'RECEIVE_ALL_CURRENT_USER_PROJECTS';

const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

export const fetchProjects = () => dispatch => (
  ProjectApiUtil.fetchProjects().then(projects => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = (user, projectForm) => dispatch => (
  ProjectApiUtil.fetchProject(user, projectForm).then(project => dispatch(receiveProject(project)))
);

export const fetchProjectsByCategory = category => dispatch => (
  ProjectApiUtil.fetchProjectsByCategory(category).then(projects => dispatch(receiveAllProjects(projects)))
);

export const createProject = (user, data) => dispatch => (
  ProjectApiUtil.createProject(user, data).then(project => dispatch(receiveProject(project)))
);

export const updateProject = projectForm => dispatch => (
  ProjectApiUtil.updateProject(projectForm).then(project => dispatch(receiveProject(project)))
);

export const deleteProject = projectForm => dispatch => (
  ProjectApiUtil.deleteProject(projectForm).then(project => dispatch(removeProject(project)))
);
