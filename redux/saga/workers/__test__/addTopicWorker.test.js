import { put, call, select } from '@redux-saga/core/effects';
import { addTopicWorker } from '../addTopicWorker';
import { addNewTopicInStore } from 'redux/actions/actions';
import { notificationSuccess, notificationError } from '../helpers/notification';
import { getTopics } from 'redux/selectors/topics';
import { topicWorkerHelper } from '../helpers/topicWorkerHelper';

describe('addTopicWorker with action payload', () => {
  const action = 'payload';
  const generator = addTopicWorker(action);

  it('addTopicWorker select getTopics', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(getTopics));
  });

  it('addTopicWorker call topicWorkerHelper', () => {
    const topics = [];
    const actual = generator.next(topics);
    expect(actual.value).toEqual(call(topicWorkerHelper, action, topics));
  });

  it('addTopicWorker put topic in store', () => {
    const payload = {
      name: 'payload',
      category: 'payload',
      dataAt: `payload`,
    };
    const actual = generator.next(payload);
    expect(actual.value).toEqual(put(addNewTopicInStore(payload)));
  });

  it('addTopicWorker call notificationSuccess', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(notificationSuccess, 'Success! Topic was added'));
  });

  it('addTopicWorker is done', () => {
    const actual = generator.next();
    expect(actual.done).toBe(true);
  });
});

describe('addTopicWorker without action payload', () => {
  const action = 'payload';
  const generator = addTopicWorker(action);

  it('addTopicWorker select getTopics', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(select(getTopics));
  });

  it('addTopicWorker call topicWorkerHelper', () => {
    const topics = [{ name: 'payload' }];
    const actual = generator.next(topics);
    expect(actual.value).toEqual(call(topicWorkerHelper, action, topics));
  });

  it('addTopicWorker call notificationError', () => {
    const actual = generator.next();
    expect(actual.value).toEqual(call(notificationError, 'Incorrect topic!'));
  });
});
