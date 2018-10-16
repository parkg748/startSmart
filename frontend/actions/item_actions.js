import * as ItemApiUtil from '../util/items_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const fetchItemsByReward = (user, project, reward) => dispatch => (
  ItemApiUtil.fetchItemsByReward(user, project, reward).then(items => dispatch(receiveAllItems(items)))
);

export const fetchItem = (user, project, reward, itemForm) => dispatch => {
  ItemApiUtil.fetchItem(user, project, reward, itemForm).then(item => dispatch(receiveItem(item)))
};

export const createItem = (user, project, reward, data) => dispatch => (
  ItemApiUtil.createItem(user, project, reward, data).then(item => dispatch(receiveItem(item)))
);
