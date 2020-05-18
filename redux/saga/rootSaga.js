import { all, fork } from 'redux-saga/effects';
import { getNewsWatcher } from './watchers/getNewsWatcher';
import { addTopicWatcher } from './watchers/addTopicWatcher';

const sagas = [
  getNewsWatcher,
  addTopicWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
