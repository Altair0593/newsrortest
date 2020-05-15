import { createSelector } from 'reselect';

export const getNewsStore = state => state.news;

export const getNews = createSelector(
  getNewsStore,
  news => news.newsData
);
