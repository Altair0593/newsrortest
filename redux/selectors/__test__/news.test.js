import { getNewsStore, getNews, getIsLoadedValue } from '../news';

describe('getNewsStore', () => {
  let state;

  beforeAll(() => {
    state = { news: 'news' };
  });

  it('getNewsStore work correct', () => {
    expect(getNewsStore(state)).toEqual(state.news);
  });

  it('getNewsStore failed with incorrect data', () => {
    expect(getNewsStore(state)).not.toEqual(state.state);
  });
});

describe('getNews', () => {
  it('getNews work correct', () => {
    const mockParameters = {
      news: { newsData: 'newsData' },
    };

    expect(getNews.resultFunc(mockParameters.news)).toEqual(mockParameters.news.newsData);
  });
});

describe('getIsLoadedValue', () => {
  it('getIsLoadedValue work correct', () => {
    const mockParameters = {
      news: { newsData: 'newsData', isLoaded: false },
    };
    expect(getIsLoadedValue.resultFunc(mockParameters.news)).toEqual(mockParameters.news.isLoaded);
  });
});
