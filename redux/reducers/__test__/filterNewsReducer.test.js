import { filterNewsReducer } from '../filterNewsReducer.js';

describe('filterNewsReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      language: 'language',
      category: 'category',
    };
  });

  it('filterNewsReducer with action.type PUT_DATE_IN_STORE and name dateTo', () => {
    const action = { type: 'PUT_DATE_IN_STORE', payload: { name: 'dateFrom', date: 'date' } };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, dateFrom: 'date' });
  });

  it('filterNewsReducer action.type PUT_DATE_IN_STORE and name dateTo', () => {
    const action = { type: 'PUT_DATE_IN_STORE', payload: { name: 'dateTo', date: 'date' } };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, dateTo: 'date' });
  });

  it('filterNewsReducer action.type PUT_LANGUAGE_IN_STORE', () => {
    const action = { type: 'PUT_LANGUAGE_IN_STORE', payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, language: 'payload' });
  });

  it('filterNewsReducer action.type PUT_CATEGORY_IN_STORE', () => {
    const action = { type: 'PUT_CATEGORY_IN_STORE', payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, category: 'payload' });
  });

  it('filterNewsReducer with action.type PUT_TIME', () => {
    const action = { type: 'PUT_TIME', payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual(initialState);
  });
});
