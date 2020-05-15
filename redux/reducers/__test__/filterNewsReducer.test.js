import { filterNewsReducer } from '../filterNewsReducer';
import actionTypes from 'redux/actionsType/actionTypes';

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
    const action = { type: actionTypes.PUT_DATE_IN_STORE, payload: { dateFrom: 'dateFromState', dateTo: 'dateToState' } };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, ...action.payload });
  });

  it('filterNewsReducer action.type PUT_LANGUAGE_IN_STORE', () => {
    const action = { type: actionTypes.PUT_LANGUAGE_IN_STORE, payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, language: 'payload' });
  });

  it('filterNewsReducer action.type PUT_CATEGORY_IN_STORE', () => {
    const action = { type: actionTypes.PUT_CATEGORY_IN_STORE, payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual({ ...initialState, category: 'payload' });
  });

  it('filterNewsReducer with action.type PUT_TIME', () => {
    const action = { type: 'PUT_TIME', payload: 'payload' };
    expect(filterNewsReducer(initialState, action)).toEqual(initialState);
  });
});
