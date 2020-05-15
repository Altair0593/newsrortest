import * as filterSelectors from '../filterNews';

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
      expect(filterSelectors.getFilterNews(state)).toEqual(state.filterNews);
    });

    it('getFilterNews failed with incorrect data', () => {
      expect(filterSelectors.getFilterNews(state)).not.toEqual(state.state);
    });
  });

  describe('getDateFrom', () => {
    it('getDateFrom work correct', () => {
       expect(filterSelectors.getDateFrom.resultFunc(state.filterNews)).toEqual(state.filterNews.dateFrom);
    });
  });

  describe('getDateTo', () => {
    it('getDateTo work correct', () => {
      expect(filterSelectors.getDateTo.resultFunc(state.filterNews)).toEqual(state.filterNews.dateTo);
    });
  });

  describe('getLanguage', () => {
    it('getLanguage work correct', () => {
      expect(filterSelectors.getLanguage.resultFunc(state.filterNews)).toEqual(state.filterNews.language);
    });
  });

  describe('getCategory', () => {
    it('getCategory work correct', () => {
      expect(filterSelectors.getCategory.resultFunc(state.filterNews)).toEqual(state.filterNews.category);
    });
  });

  describe('getActivePage', () => {
    it('getActivePage work correct', () => {
      expect(filterSelectors.getActivePage(state)).toEqual(state.filterNews.defaultActivePage);
    });

    it('getActivePage failed with incorrect data', () => {
      expect(filterSelectors.getActivePage(state)).not.toEqual(state.state);
    });
  });
  describe('getTotalPages', () => {
    it('getTotalPages work correct', () => {
      expect(filterSelectors.getTotalPages(state)).toEqual(state.filterNews.totalPages);
    });

    it('getTotalPages failed with incorrect data', () => {
      expect(filterSelectors.getTotalPages(state)).not.toEqual(state.state);
    });
  });
});
