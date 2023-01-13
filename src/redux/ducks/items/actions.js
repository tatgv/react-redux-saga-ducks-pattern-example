import * as types from './types';

export const getItems = id => ({
  type: types.GET_ITEMS,
  payload: id,
});

export const setItems = items => ({
  type: types.SET_ITEMS,
  payload: items,
});
