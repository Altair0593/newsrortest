import { put, call, select } from 'redux-saga/effects';
import { notificationSuccess, notificationError } from './helpers/notification';

import rout from 'constants/apiConst';
import { getRequestSender } from './helpers/request';
import { putNewsInStore, putTotalPages } from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';
import * as helpers from './helpers/formatDate';

export function* getNewsWorker() {
  try {
    const dateTo = yield select(filterSelectors.getDateTo);
    const dateFrom = yield select(filterSelectors.getDateFrom);
    const category = yield select(filterSelectors.getCategory);
    const language = yield select(filterSelectors.getLanguage);
    const activePage = yield select(filterSelectors.getActivePage);

    const dateToFormatted = yield call(helpers.formatDatePicker, dateTo);
    const dateFromFormatted = yield call(helpers.formatDatePicker, dateFrom);

    const path = `${rout.url}${category}&from=${dateFromFormatted}&to=${dateToFormatted}&language=${language}&sortBy=publishedAt&pageSize=10&page=${activePage}&${rout.apiKey}`;

    const response = yield call(getRequestSender, path);
    const { articles } = response.data;
    const newResponse = yield call(helpers.formatPublishedDate, articles);
    if (newResponse) {
      yield put(putNewsInStore(newResponse));
      yield call(notificationSuccess, 'News was loaded');
    } else {
      yield call(notificationError, 'News wasn\'t loaded');
    }
  } catch (err) {
    yield call(notificationError, 'News wasn\'t loaded CATCH');
  }
}
