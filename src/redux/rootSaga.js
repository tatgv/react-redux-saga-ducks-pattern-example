import { sagas as itemSagas } from './ducks/items';
import { fork, all } from 'redux-saga/effects';

const allSagas = [...itemSagas];

// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)));
}
