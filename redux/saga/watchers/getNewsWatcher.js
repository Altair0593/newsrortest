import { takeLatest } from '@redux-saga/core/effects';
import actionTypes from 'redux/actionsType/actionTypes';
import { getNewsWorker } from '../workers/getNewsWorker';

export function* getNewsWatcher() {
  yield takeLatest(actionTypes.GET_DEFAULT_NEWS, getNewsWorker);
}
