import * as actions from '../actions';
import actionTypes from 'redux/actionsType/actionTypes';

describe('getDefaultNews', () => {
  it('getDefaultNews, work correct', () => {
    const expected = { type: actionTypes.GET_DEFAULT_NEWS };

    expect(actions.getDefaultNews(expected.payload)).toEqual(expected);
  });
});

describe('changeTranslateLanguage', () => {
  it('changeTranslateLanguage, work correct', () => {
    const expected = { type: actionTypes.CHANGE_TRANSLATE_LANGUAGE, payload: 'payload' };

    expect(actions.changeTranslateLanguage(expected.payload)).toEqual(expected);
  });
});

describe('changeDateFilter', () => {
  it('changeLanguage, work correct', () => {
    const expected = { type: actionTypes.CHANGE_DATE_FILTER, payload: 'payload' };

    expect(actions.changeDateFilter(expected.payload)).toEqual(expected);
  });
});

describe('putDateInStore', () => {
  it('putDateToInStore, work correct', () => {
    const expected = { type: actionTypes.PUT_DATE_IN_STORE, payload: 'payload' };

    expect(actions.putDateInStore(expected.payload)).toEqual(expected);
  });
});

describe('putLanguageInStore', () => {
  it('putLanguageInStore, work correct', () => {
    const expected = { type: actionTypes.PUT_LANGUAGE_IN_STORE, payload: 'payload' };

    expect(actions.putLanguageInStore(expected.payload)).toEqual(expected);
  });
});
