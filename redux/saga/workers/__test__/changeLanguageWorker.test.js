import { put, call } from '@redux-saga/core/effects';
import { changeLanguageWorker } from '../changeLanguageWorker';
import * as actions from 'redux/actions/actions';
import { notificationSuccess, notificationError } from '../helpers/notification';

describe('changeLanguageWorker with action payload', () => {
  const action = { payload: 'payload' };
  const generator = changeLanguageWorker(action);

  it('changeLanguageWorker put language in store', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(put(actions.putLanguageInStore(action.payload)));
  });

  it('changeLanguageWorker call notificationSuccess', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(notificationSuccess, 'News language was changed'));
  });

  it('changeLanguageWorker is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});

describe('changeLanguageWorker without action payload', () => {
  const action = { payload: '' };
  const generator = changeLanguageWorker(action);

  it('changeLanguageWorker call notificationError', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(notificationError, 'Language hasn\'t been selected'));
  });

  it('changeLanguageWorker is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});
