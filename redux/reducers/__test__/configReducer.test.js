import { configReducer } from '../configReducer';
import actionTypes from 'redux/actionsType/actionTypes';

describe('configReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = { locale: 'locale' };
  });

  it('configReducer with action.type PUT_TRANSLATE_LANGUAGE', () => {
    const action = { type: actionTypes.PUT_TRANSLATE_LANGUAGE, payload: 'payload' };
    expect(configReducer(initialState, action)).toEqual({ locale: 'payload' });
  });

  it('configReducer with action.type PUT_TIME', () => {
    const action = { type: 'PUT_TIME', payload: 'payload' };
    expect(configReducer(initialState, action)).toEqual(initialState);
  });
});
