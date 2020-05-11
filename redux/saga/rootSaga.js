import { all, fork } from 'redux-saga/effects';
import { getNewsWatcher } from './watchers/getNewsWatcher.js';

const sagas = [
  getNewsWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
