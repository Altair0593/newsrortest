import { put } from 'redux-saga/effects';
import actionTypes from '~/redux/actionsType/actionTypes.js';

export function* getNewsWorker(action) {
  yield put({ type: actionTypes.PUT_NEWS_IN_STORE, payload: action.payload });
}
