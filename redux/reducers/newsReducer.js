import actionTypes from '../actionsType/actionTypes';

export const initialState = {
  newsData: [],
  isLoaded: false,
  errorMessage: '',
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_NEWS_IN_STORE:
      return {
        ...state,
        newsData: action.payload,
      };
    case actionTypes.RESET_STORE:
      return {
         ...initialState,
      };
    case actionTypes.CHANGE_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case actionTypes.PUT_ERROR_IN_STORE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
