import { call, put, takeEvery } from 'redux-saga/effects';

import * as types from './types';
import { getItemsFromAPI } from './api';
import { setItems } from './actions';

export function* fetchItems(action) {
  try {
    // call the API
    const data = yield call(getItemsFromAPI, action.payload);
    // dispatch a success action with the data
    yield put(setItems(data));
  } catch (error) {
    console.log(error);
  }
}

// the watcher function
export function* watchFetchData() {
  yield takeEvery(types.GET_ITEMS, fetchItems);
}

export const sagas = [
  watchFetchData,
];
