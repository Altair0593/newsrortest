import { put, call } from '@redux-saga/core/effects';
import actionTypes from 'redux/actionsType/actionTypes';
import { notificationSuccess, notificationError } from './helpers/notification';

export function* changeLanguageWorker(action) {
  if (action.payload) {
    yield put({ type: actionTypes.PUT_LANGUAGE_IN_STORE, payload: action.payload });
    yield call(notificationSuccess, 'News language was changed');
  } else {
    yield call(notificationError, 'Language hasn\'t been selected');
  }
}
