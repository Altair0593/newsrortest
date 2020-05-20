import { put, call, select } from '@redux-saga/core/effects';
import { getNewsWorker, putNewsArticles } from '../getNewsWorker';
import { getRequestSender } from '../helpers/request';
import { putNewsInStore, changeIsLoaded, putErrorInStore, putTotalPagesInStore } from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';
import * as helpers from '../helpers/formatData';
import { notificationSuccess, notificationError } from '../helpers/notification';
import mockData from '__mocks__/mockNews';

describe('getNewsWorker with action payload', () => {
  const generator = getNewsWorker();
  const path = 'https://newsapi.org/v2/everything?q=undefined&from=undefined&to=undefined&language=undefined&sortBy=publishedAt&pageSize=10&page=undefined&apiKey=9dba764bade84feea6bc9a636baf8f6e';

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

  it('getNewsWorker call changeIsLoaded', () => {
    const payload = true;
    const actual = generator.next();
    expect(actual.value).toEqual(put(changeIsLoaded(payload)));
  });

  it('getNewsWorker call request', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(getRequestSender, path));
  });

  it('getNewsWorker call putErrorInStore', () => {
    const response = {
      data: {
        articles: mockData,
        totalResults: 134,
      },
    };

    const payload = '';
    const actual = generator.next(response);
    expect(actual.value).toEqual(put(putErrorInStore(payload)));
  });

  it('getNewsWorker call putNewsArticles', () => {
    const response = {
      data: {
        articles: mockData,
        totalResults: 134,
      },
    };

    const actual = generator.next();
    expect(actual.value).toEqual(call(putNewsArticles, response.data.articles, response.data.totalResults));
  });
});

describe('putNewsArticles', () => {
    const response = {
    data: {
      articles: mockData,
      totalResults: 134,
    },
  };

  const { articles, totalResults } = response.data;

  const generator = putNewsArticles(articles, totalResults);

  it('putNewsArticles call formatArticles', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(helpers.formatArticles, articles));
  });

  it('getNewsWorker call getTotalPages', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(helpers.getTotalPages, totalResults));
  });

  it('getNewsWorker put news in store', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(put(putNewsInStore()));
  });

  it('getNewsWorker put news in store', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(put(putTotalPagesInStore()));
  });

  it('getNewsWorker call changeIsLoaded', () => {
    const payload = false;
    const actual = generator.next();
    expect(actual.value).toEqual(put(changeIsLoaded(payload)));
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
