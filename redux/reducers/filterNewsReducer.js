import moment from 'moment';
import actionTypes from '../actionsType/actionTypes';

const currentDay = moment().day();

export const initialState = {
  dateFrom: moment().isoWeekday(currentDay - 7).valueOf(),
  dateTo: moment().isoWeekday(currentDay).valueOf(),
  language: 'en',
  category: 'trump',
  defaultActivePage: 1,
  totalPages: 10,
  isError: false,
};

export const filterNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_DATE_IN_STORE:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.PUT_LANGUAGE_IN_STORE:
      return {
        ...state,
        language: action.payload,
      };
    case actionTypes.PUT_CATEGORY_IN_STORE:
      return {
        ...state,
        category: action.payload,
      };
    case actionTypes.CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        defaultActivePage: action.payload,
      };
    case actionTypes.PUT_TOTAL_RESULT_IN_STORE:
      return {
        ...state,
        totalPages: action.payload,
      };
    case actionTypes.RESET_STORE:
      return {
        ...initialState,
      };
    case actionTypes.CHANGE_IS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
