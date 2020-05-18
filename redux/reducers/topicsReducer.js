import config from 'constants/config';
import actionTypes from 'redux/actionsType/actionTypes';

export const initialState = {
  topicsData: config.mockTopics,
};

export const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_NEW_TOPIC_IN_STORE:
      return {
        ...state,
        topicsData: [...state.topicsData, action.payload],
      };
    case actionTypes.RESET_STORE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
