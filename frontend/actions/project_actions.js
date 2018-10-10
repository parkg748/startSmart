import * as ProjectApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = project => ({
  type: REMOVE_PROJECT,
  projectId: project.id
});

export const fetchProjects = () => dispatch => (
  ProjectApiUtil.fetchProjects().then(projects => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = projectForm => dispatch => (
  ProjectApiUtil.fetchProject(projectForm).then(project => dispatch(receiveProject(project)))
);

export const fetchProjectsByCategory = category => dispatch => (
  ProjectApiUtil.fetchProjectsByCategory(category).then(projects => dispatch(receiveAllProjects(projects)))
);

export const createProject = projectForm => dispatch => (
  ProjectApiUtil.createProject(projectForm).then(project => dispatch(receiveProject(project)))
);

export const updateProject = projectForm => dispatch => (
  ProjectApiUtil.updateProject(projectForm).then(project => dispatch(receiveProject(project)))
);

export const deleteProject = projectForm => dispatch => (
  ProjectApiUtil.deleteProject(projectForm).then(project => dispatch(removeProject(project)))
);
