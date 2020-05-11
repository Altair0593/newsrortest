import { getFilterNews, getDateFrom, getDateTo, getLanguage, getCategory } from '../filterNews.js';

describe('testFilterNewsSelectors', () => {
  let state = { filterNews: null };

  beforeEach(() => {
    state.filterNews = {
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      language: 'language',
      category: 'category',
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
});
