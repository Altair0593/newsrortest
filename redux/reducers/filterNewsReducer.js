import actionTypes from '../actionsType/actionTypes';

const currentDate = new Date();

export const initialState = {
  dateFrom: currentDate,
  dateTo: currentDate,
  language: 'en',
  category: 'trump',
  defaultActivePage: 1,
  totalPages: 10,
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
    default:
      return state;
  }
};
