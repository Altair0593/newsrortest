import { createSelector } from 'reselect';

export const getFilterNews = state => state.filterNews;

export const getDateFrom = createSelector(
  getFilterNews,
  filterNews => filterNews.dateFrom
);

export const getDateTo = createSelector(
  getFilterNews,
  filterNews => filterNews.dateTo
);

export const getLanguage = createSelector(
  getFilterNews,
  filterNews => filterNews.language
);

export const getCategory = createSelector(
  getFilterNews,
  filterNews => filterNews.category
);

export const getActivePage = createSelector(
  getFilterNews,
  filterNews => filterNews.defaultActivePage,
);

export const getTotalPages = createSelector(
  getFilterNews,
  filterNews => filterNews.totalPages,
);
