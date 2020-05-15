import actionTypes from '../actionsType/actionTypes';

export const getDefaultNews = () => ({ type: actionTypes.GET_DEFAULT_NEWS });
export const putNewsInStore = payload => ({ type: actionTypes.PUT_NEWS_IN_STORE, payload });
export const changeTranslateLanguage = payload => ({ type: actionTypes.CHANGE_TRANSLATE_LANGUAGE, payload });
export const changeLanguage = payload => ({ type: actionTypes.CHANGE_LANGUAGE, payload });
export const changeDateFilter = payload => ({ type: actionTypes.CHANGE_DATE_FILTER, payload });
export const putDateInStore = payload => ({ type: actionTypes.PUT_DATE_IN_STORE, payload });
export const putLanguageInStore = payload => ({ type: actionTypes.PUT_LANGUAGE_IN_STORE, payload });
