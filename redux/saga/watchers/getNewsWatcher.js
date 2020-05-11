import { takeEvery } from '@redux-saga/core/effects';
import actionTypes from '~/redux/actionsType/actionTypes.js';
import { getNewsWorker } from '../workers/getNewsWorker.js';

export function* getNewsWatcher() {
  yield takeEvery(actionTypes.GET_DEFAULT_NEWS, getNewsWorker);
}
