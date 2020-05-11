import { createSelector } from 'reselect';

export const getConfigStore = state => state.config;

export const getLocale = createSelector(getConfigStore,
  config => config.locale
);

export const getDatePickerInputs = createSelector(getConfigStore,
  config => config.configData.datePickerInputs
);

export const getDatePickerButton = createSelector(getConfigStore,
  config => config.configData.datePickerButton
);

export const getHeaderModalButton = createSelector(getConfigStore,
    config => config.configData.headerModalButton
);

export const getHeaderModalText = createSelector(getConfigStore,
  config => config.configData.headerModalText
);

export const getLanguagePickerButton = createSelector(getConfigStore,
  config => config.configData.languagePickerButtons
);
