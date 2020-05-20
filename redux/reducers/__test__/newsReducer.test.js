import { newsReducer } from '../newsReducer.js';
import actionTypes from 'redux/actionsType/actionTypes';

describe('newsReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      newsData: 'newsData',
      errorMessage: 'errorMessage',
      isLoaded: false,
    };
  });

  it('newsReducer with action.type PUT_NEWS_IN_STORE', () => {
    const action = { type: actionTypes.PUT_NEWS_IN_STORE, payload: 'payload' };
    expect(newsReducer(initialState, action)).toEqual({ ...initialState, newsData: action.payload });
  });

  it('newsReducer with action.type CHANGE_IS_LOADED', () => {
    const action = { type: 'CHANGE_IS_LOADED', payload: 'payload' };
    expect(newsReducer(initialState, action)).toEqual({ ...initialState, isLoaded: action.payload });
  });

  it('newsReducer with action.type PUT_ERROR_MESSAGE', () => {
    const action = { type: 'PUT_ERROR_MESSAGE', payload: 'errorMessage' };
    expect(newsReducer(initialState, action)).toEqual({ ...initialState, errorMessage: action.payload });
  });

  it('newsReducer with action.type PUT_TIME', () => {
    const action = { type: 'PUT_TIME', payload: 'payload' };
    expect(newsReducer(initialState, action)).toEqual(initialState);
  });
});
