import actionTypes from '../actionsType/actionTypes.js';
import config from '../../constants/config';

export const initialState = {
  newsData: config.mockNews,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_NEWS_IN_STORE:
      return {
        ...state,
        newsData: action.payload,
      };
    default:
      return state;
  }
};
