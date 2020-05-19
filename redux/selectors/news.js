import { createSelector } from 'reselect';

export const getNewsStore = state => state.news;

export const getNews = createSelector(
  getNewsStore,
  news => news.newsData
);

export const getIsLoadedValue = createSelector(
  getNewsStore,
  news => news.isLoaded
);
