import config from 'constants/config';

export const initialState = {
  topicsData: config.mockTopics,
};

export const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
