import { put, call, select } from 'redux-saga/effects';
import { notificationSuccess, notificationError } from './helpers/notification';
import { getTopics } from 'redux/selectors/topics';
import { addNewTopicInStore } from 'redux/actions/actions';
import { topicWorkerHelper } from './helpers/topicWorkerHelper';
import { topicsMaximum } from 'constants/topicsAmountConst';

export function* addTopicWorker(action) {
  const topics = yield select(getTopics);
  const result = yield call(topicWorkerHelper, action, topics);
  if (result) {
    yield put(addNewTopicInStore(result));
    yield call(notificationSuccess, 'Success! Topic was added');
  } else {
    yield call(notificationError, topics.length === topicsMaximum ? 'Sorry, you cant add more than 10 topics' : 'Incorrect topic!');
  }
}
