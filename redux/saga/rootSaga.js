import { all, fork } from 'redux-saga/effects';
import { getNewsWatcher } from './watchers/getNewsWatcher';
import { changeLanguageWatcher } from './watchers/changeLanguageWatcher';

const sagas = [
  getNewsWatcher,
  changeLanguageWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
