import actionTypes from '../actionsType/actionTypes';

export const initialState = {
  newsData: [],
  isLoaded: false,
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
    default:
      return state;
  }
};
