import { getNewsStore, getNews } from '../news.js';

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
