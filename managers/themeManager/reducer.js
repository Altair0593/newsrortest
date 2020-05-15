import config from 'constants/config';
import light from './theme/lightTheme';

const themes = { light };

export const initialState = {
  currentTheme: themes[config.defaultTheme],
  nameTheme: config.defaultTheme,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
