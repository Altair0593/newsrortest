import { getActivePage, getTotalPages ,getFilterNews, getDateFrom, getDateTo, getLanguage, getCategory } from '../filterNews.js';

describe('testFilterNewsSelectors', () => {
  let state = { filterNews: null };

  beforeEach(() => {
    state.filterNews = {
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      language: 'language',
      category: 'category',
      defaultActivePage: 'defaultActivePAge',
      totalPages: 'totalPages',
    };
  });

  describe('getFilterNews', () => {
    it('getFilterNews work correct', () => {
      expect(getFilterNews(state)).toEqual(state.filterNews);
    });

    it('getFilterNews failed with incorrect data', () => {
      expect(getFilterNews(state)).not.toEqual(state.state);
    });
  });

  describe('getDateFrom', () => {
    it('getDateFrom work correct', () => {
       expect(getDateFrom.resultFunc(state.filterNews)).toEqual(state.filterNews.dateFrom);
    });
  });

  describe('getDateTo', () => {
    it('getDateTo work correct', () => {
      expect(getDateTo.resultFunc(state.filterNews)).toEqual(state.filterNews.dateTo);
    });
  });

  describe('getLanguage', () => {
    it('getLanguage work correct', () => {
      expect(getLanguage.resultFunc(state.filterNews)).toEqual(state.filterNews.language);
    });
  });

  describe('getCategory', () => {
    it('getCategory work correct', () => {
      expect(getCategory.resultFunc(state.filterNews)).toEqual(state.filterNews.category);
    });
  });

  describe('getActivePage', () => {
    it('getActivePage work correct', () => {
      expect(getActivePage(state)).toEqual(state.filterNews.defaultActivePage);
    });

    it('getActivePage failed with incorrect data', () => {
      expect(getActivePage(state)).not.toEqual(state.state);
    });
  });
  describe('getTotalPages', () => {
    it('getTotalPages work correct', () => {
      expect(getTotalPages(state)).toEqual(state.filterNews.totalPages);
    });

    it('getTotalPages failed with incorrect data', () => {
      expect(getTotalPages(state)).not.toEqual(state.state);
    });
  });
});
