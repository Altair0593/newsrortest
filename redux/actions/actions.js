import actionTypes from '../actionsType/actionTypes';

export const getDefaultNews = () => ({ type: actionTypes.GET_DEFAULT_NEWS });
export const putNewsInStore = payload => ({ type: actionTypes.PUT_NEWS_IN_STORE, payload });
export const changeTranslateLanguage = payload => ({ type: actionTypes.CHANGE_TRANSLATE_LANGUAGE, payload });
export const changeDateFilter = payload => ({ type: actionTypes.CHANGE_DATE_FILTER, payload });
export const putDateInStore = payload => ({ type: actionTypes.PUT_DATE_IN_STORE, payload });
export const putLanguageInStore = payload => ({ type: actionTypes.PUT_LANGUAGE_IN_STORE, payload });
export const addNewTopic = payload => ({ type: actionTypes.ADD_NEW_TOPIC, payload });
export const addNewTopicInStore = payload => ({ type: actionTypes.PUT_NEW_TOPIC_IN_STORE, payload });
export const putCategoryInStore = payload => ({ type: actionTypes.PUT_CATEGORY_IN_STORE, payload });
export const changeActivePage = payload => ({ type: actionTypes.CHANGE_ACTIVE_PAGE, payload });
export const putTotalPagesInStore = payload => ({ type: actionTypes.PUT_TOTAL_RESULT_IN_STORE, payload });
export const changeIsError = payload => ({ type: actionTypes.CHANGE_IS_ERROR, payload });
export const resetStoreToDefault = () => ({ type: actionTypes.RESET_STORE });
