import actionTypes from '../actionsType/actionTypes';

export const initialState = {
  newsData: [],
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
    default:
      return state;
  }
};
