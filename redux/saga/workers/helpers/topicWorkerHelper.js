import { topicsMaximum } from 'constants/topicsAmountConst';

export const topicWorkerHelper = (action, topics) => {
  if (topics.length === topicsMaximum) {
    return false;
  }
  const newTopic = action.payload;
  const payload = {
    name: newTopic,
    category: newTopic.toLowerCase(),
    dataAt: `data-at-${newTopic.toLowerCase()}-category`,
  };
  const result = topics.find(({ name }) => name === newTopic);
  if (result === undefined && newTopic.length) {
    return payload;
  } else {
    return false;
  }
};