import { takeLatest } from '@redux-saga/core/effects';
import { changeLanguageWatcher } from '../changeLanguageWatcher';
import { changeLanguageWorker } from 'redux/saga/workers/changeLanguageWorker';
import actionTypes from 'redux/actionsType/actionTypes';

describe('Testing changeLanguageWatcher: ', () => {
  const generator = changeLanguageWatcher();

  it('changeLanguageWatcher takeLatest CHANGE_LANGUAGE', () => {
    const actual = generator.next();
    expect(actual.value).toMatchObject(takeLatest(actionTypes.CHANGE_LANGUAGE, changeLanguageWorker));
  });

  it('changeLanguageWatcher is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});
