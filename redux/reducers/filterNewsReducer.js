import actionTypes from '../actionsType/actionTypes.js';
import moment from 'moment';

export const initialState = {
  dateFrom: moment().format('DD-MM-YYYY'),
  dateTo: moment().format('DD-MM-YYYY'),
  language: 'en',
  category: 'bitcoin',
  defaultActivePage: 1,
  totalPages: 10,
};

export const filterNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_DATE_IN_STORE:
      return {
        ...state,
        [action.payload.name]: action.payload.date,
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
    default:
      return state;
  }
};
