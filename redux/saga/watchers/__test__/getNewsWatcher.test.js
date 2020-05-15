import { takeLatest } from '@redux-saga/core/effects';
import { getNewsWatcher } from '../getNewsWatcher';
import { getNewsWorker } from 'redux/saga/workers/getNewsWorker';
import actionTypes from 'redux/actionsType/actionTypes';

describe('Testing getNewsWatcher: ', () => {
  const generator = getNewsWatcher();

  it('getNewsWatcher takeLatest GET_DEFAULT_NEWS', () => {
    const actual = generator.next();
    expect(actual.value).toMatchObject(takeLatest(actionTypes.GET_DEFAULT_NEWS, getNewsWorker));
  });

  it('getNewsWatcher is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});
