import { put, call, select } from 'redux-saga/effects';
import { notificationSuccess, notificationError } from './helpers/notification';

import rout from 'constants/apiConst';
import { getRequestSender } from './helpers/request';
import { putNewsInStore } from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';

export function* getNewsWorker() {
  try {
    const dateTo = yield select(filterSelectors.getDateTo);
    const dateFrom = yield select(filterSelectors.getDateFrom);
    const сategory = yield select(filterSelectors.getCategory);
    const language = yield select(filterSelectors.getLanguage);
    const activePage = yield select(filterSelectors.getActivePage);

    const path = `${rout.url}${сategory}&from=${dateFrom}&to=${dateTo}&language=${language}&page=${activePage}&sortBy=publishedAt&${rout.apiKey}`;
    const response = yield call(getRequestSender, path);
    
    if (response.data.articles) {
      yield put(putNewsInStore(response.data.articles));
      yield call(notificationSuccess, 'News was loaded');
    } else {
      yield call(notificationError, 'News wasn\'t loaded');
    }
  } catch (err) {
    yield call(notificationError, 'News wasn\'t loaded');
  }
}
