import * as newsSelectors from '../news';

describe('getNewsStore', () => {
  let state;

  beforeAll(() => {
    state = { news: 'news' };
  });

  it('getNewsStore work correct', () => {
    expect(newsSelectors.getNewsStore(state)).toEqual(state.news);
  });

  it('getNewsStore failed with incorrect data', () => {
    expect(newsSelectors.getNewsStore(state)).not.toEqual(state.state);
  });
});

describe('News selectors', () => {
  let mockParameters;

  beforeEach(() => {
    mockParameters = {
      news: {
        newsData: 'newsData',
        errorMessage: 'errorMessage',
        isLoaded: false,
      },
    };
  });

  describe('getNews', () => {
    it('getNews work correct', () => {
      expect(newsSelectors.getNews.resultFunc(mockParameters.news)).toEqual(mockParameters.news.newsData);
    });

    it('getNews work correct', () => {
      expect(newsSelectors.getNews.resultFunc(mockParameters.news)).toEqual(mockParameters.news.newsData);
    });
  });

  describe('getIsLoadedValue', () => {
    it('getIsLoadedValue work correct', () => {
      expect(newsSelectors.getIsLoadedValue.resultFunc(mockParameters.news)).toEqual(mockParameters.news.isLoaded);
    });
  });

  describe('getErrorMessage', () => {
    it('getErrorMessage work correct', () => {
      expect(newsSelectors.getErrorMessage.resultFunc(mockParameters.news)).toEqual(mockParameters.news.errorMessage);
    });
  });
});
