import { takeEvery } from '@redux-saga/core/effects';
import actionTypes from 'redux/actionsType/actionTypes';
import { addTopicWorker } from '../workers/addTopicWorker';

export function* addTopicWatcher() {
  yield takeEvery(actionTypes.ADD_NEW_TOPIC, addTopicWorker);
}
