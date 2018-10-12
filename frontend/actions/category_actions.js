import * as CategoryApiUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
})

const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategory = categoryForm => dispatch => (
  CategoryApiUtil.fetchCategory(categoryForm).then(category => dispatch(receiveCategory(category)))
);

export const fetchCategories = () => dispatch => (
  CategoryApiUtil.fetchCategories().then(categories => dispatch(receiveAllCategories(categories)))
);
