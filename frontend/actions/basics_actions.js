import * as BasicApiUtil from '../util/basics_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
});

export const createBasics = projectForm => dispatch => (
  BasicApiUtil.createBasics(projectForm).then(project => dispatch(receiveProject(project)))
);
