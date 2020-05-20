import { put, call, select } from 'redux-saga/effects';
import { notificationSuccess, notificationError } from './helpers/notification';

import rout from 'constants/apiConst';
import { getRequestSender } from './helpers/request';
import * as actions from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';
import * as helpers from './helpers/formatData';

export function* getNewsWorker() {
  try {
    const dateTo = yield select(filterSelectors.getDateTo);
    const dateFrom = yield select(filterSelectors.getDateFrom);
    const category = yield select(filterSelectors.getCategory);
    const language = yield select(filterSelectors.getLanguage);
    const activePage = yield select(filterSelectors.getActivePage);

    const dateFromFormatted = yield call(helpers.formatDatePickerFrom, dateFrom);
    const dateToFormatted = yield call(helpers.formatDatePickerTo, dateTo);

    const path = `${rout.url}${category}&from=${dateFromFormatted}&to=${dateToFormatted}&language=${language}&sortBy=publishedAt&pageSize=10&page=${activePage}&${rout.apiKey}`;
    yield put(actions.changeIsLoaded(true));
    const response = yield call(getRequestSender, path);

    yield put(actions.putErrorInStore(''));

    const { articles, totalResults } = response.data;

    const newArticles = yield call(helpers.formatArticles, articles);
    const totalPagesResult = yield call(helpers.getTotalPages, totalResults);

    if (newArticles) {
      yield put(actions.putNewsInStore(newArticles));
      yield put(actions.putTotalPagesInStore(totalPagesResult));
      yield put(actions.changeIsLoaded(false));
      yield call(notificationSuccess, 'News was loaded');
    } else {
      yield call(notificationError, 'News wasn\'t loaded');
    }
  } catch (err) {
    if (err.response.data) {
      const { message } = err.response.data;
      yield put(actions.putErrorInStore(message));
    }

    yield put(actions.changeIsLoaded(false));
    yield put(actions.putNewsInStore([]));
    yield call(notificationError, 'News wasn\'t loaded');
  }
}
