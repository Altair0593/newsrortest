import { newsReducer } from '../newsReducer.js';

describe('filterNewsReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = { newsData: 'newsData' };
  });

  it('newsReducer with action.type PUT_NEWS_IN_STORE', () => {
    const action = { type: 'PUT_NEWS_IN_STORE', payload: 'payload' };
    expect(newsReducer(initialState, action)).toEqual({ newsData: 'payload' });
  });

  it('newsReducer with action.type PUT_TIME', () => {
    const action = { type: 'PUT_TIME', payload: 'payload' };
    expect(newsReducer(initialState, action)).toEqual(initialState);
  });
});
