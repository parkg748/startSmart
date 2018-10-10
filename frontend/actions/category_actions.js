import * as CategoryApiUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategory = categoryForm => dispatch => (
  CategoryApiUtil.fetchCategory(categoryForm).then(category => dispatch(receiveCategory(category)))
);
