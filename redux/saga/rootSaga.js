import { all, fork } from 'redux-saga/effects';
import { getNewsWatcher } from './watchers/getNewsWatcher';
import { changeLanguageWatcher } from './watchers/changeLanguageWatcher';
import { addTopicWatcher } from './watchers/addTopicWatcher';

const sagas = [
  getNewsWatcher,
  changeLanguageWatcher,
  addTopicWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
