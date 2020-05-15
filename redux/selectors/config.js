import { createSelector } from 'reselect';

export const getConfigStore = state => state.config;

export const getLocale = createSelector(
  getConfigStore,
  config => config.locale
);

export const getConfigData = createSelector(
  getConfigStore,
  config => config.configData
);

export const getDatePickerInputs = createSelector(
  getConfigData,
  configData => configData.datePickerInputs
);

export const getDatePickerButton = createSelector(
  getConfigData,
  configData => configData.datePickerButton
);

export const getLanguagePickerButton = createSelector(
  getConfigData,
  configData => configData.languagePickerButtons
);

export const getHeaderModalButton = createSelector(
  getConfigStore,
  config => config.configData.headerModalButton
);

export const getHeaderModalText = createSelector(
  getConfigStore,
  config => config.configData.headerModalText
);
