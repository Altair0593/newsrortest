import { createSelector } from 'reselect';

export const getThemeStore = state => state.theme;

export const getCurrentTheme = createSelector(
  getThemeStore,
  theme => theme.currentTheme
);
