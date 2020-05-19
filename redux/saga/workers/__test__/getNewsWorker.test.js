import { put, call, select } from '@redux-saga/core/effects';
import { getNewsWorker } from '../getNewsWorker';
import { getRequestSender } from '../helpers/request';
import { putNewsInStore } from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';
import * as helpers from '../helpers/formatData';
import { notificationSuccess, notificationError } from '../helpers/notification';
import mockData from '__mocks__/mockNews';

describe('getNewsWorker with action payload', () => {
  const action = { payload: 'payload' };
  const generator = getNewsWorker(action);
  const path = 'https://newsapi.org/v2/everything?q=undefined&from=undefined&to=undefined&language=undefined&sortBy=publishedAt&page=undefined&apiKey=a34900e46a5f4b999e43deb5f1931cc6';

  it('getNewsWorker select getDateTo', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(filterSelectors.getDateTo));
  });

  it('getNewsWorker select getDateFrom', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(filterSelectors.getDateFrom));
  });

  it('getNewsWorker select getCategory', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(filterSelectors.getCategory));
  });

  it('getNewsWorker select getLanguage', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(filterSelectors.getLanguage));
  });

  it('getNewsWorker select getActivePage', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(filterSelectors.getActivePage));
  });

  it('getNewsWorker call dateToFormatted', () => {
    const payload = undefined;
    const actual = generator.next();
    expect(actual.value).toEqual(call(helpers.formatDatePickerFrom, payload));
  });

  it('getNewsWorker call dateFromFormatted', () => {
    const payload = undefined;
    const actual = generator.next();
    expect(actual.value).toEqual(call(helpers.formatDatePickerTo, payload));
  });

  it('getNewsWorker call request', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(getRequestSender, path));
  });

  it('getNewsWorker call formatPublishedDate', () => {
    const payload = mockData;
    const actual = generator.next();
    expect(actual.value).toEqual(call(helpers.formatPublishedDate, payload));
  });

  it('getNewsWorker put news in store', () => {
    const payload = { data: { articles: [] } };
    const actual = generator.next(payload);
    expect(actual.value).toEqual(put(putNewsInStore(payload.data.articles)));
  });

  it('getNewsWorker notification call', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(notificationSuccess, 'News was loaded'));
  });

  it('getNewsWorker is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});

describe('getNewsWorker without action payload', () => {
  const action = { type: '', payload: null };
  const generator = getNewsWorker(action);

  it('getNewsWorker call notificationError', () => {
    generator.next();
    const error = 'News wasn\'t loaded';
    expect(generator.throw(new Error(error)).value).toEqual(call(notificationError, error));
  });

  it('getNewsWorker is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});
