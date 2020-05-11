import { getDefaultNews, changeTranslateLanguage } from '../actions.js';
import actionTypes from '../../actionsType/actionTypes';

describe('getDefaultNews', () => {
  it('getDefaultNews, work correct', () => {
    const expected = { type: actionTypes.GET_DEFAULT_NEWS, payload: 'payload' };

    expect(getDefaultNews(expected.payload)).toEqual(expected);
  });
});

describe('changeTranslateLanguage', () => {
  it('changeTranslateLanguage, work correct', () => {
    const expected = { type: actionTypes.CHANGE_TRANSLATE_LANGUAGE, payload: 'payload' };

    expect(changeTranslateLanguage(expected.payload)).toEqual(expected);
  });
});
