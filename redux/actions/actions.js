import actionTypes from '../actionsType/actionTypes.js';

export const getDefaultNews = payload => ({ type: actionTypes.GET_DEFAULT_NEWS, payload });
export const changeTranslateLanguage = payload => ({ type: actionTypes.CHANGE_TRANSLATE_LANGUAGE, payload });
