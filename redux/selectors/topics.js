import { createSelector } from 'reselect';

export const getTopicsStore = state => state.topics;

export const getTopics = createSelector(getTopicsStore,
    topics => topics.topicsData
);
