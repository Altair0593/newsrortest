import { takeLatest } from '@redux-saga/core/effects';
import actionTypes from 'redux/actionsType/actionTypes';
import { changeLanguageWorker } from '../workers/changeLanguageWorker';

export function* changeLanguageWatcher() {
  yield takeLatest(actionTypes.CHANGE_LANGUAGE, changeLanguageWorker);
}
