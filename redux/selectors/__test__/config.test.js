import * as configSelectors from '../config';

describe('getConfigStore', () => {
  let state;

  beforeAll(() => {
    state = { config: 'config' };
  });

  it('getConfigStore work correct', () => {
    expect(configSelectors.getConfigStore(state)).toEqual(state.config);
  });

  it('getConfigStore failed with incorrect data', () => {
    expect(configSelectors.getConfigStore(state)).not.toEqual(state.state);
  });
});

describe('getLocale', () => {
  let mockParameters;

  beforeEach(() => {
    mockParameters = { locale: 'locale' };
  });

  it('getLocale work correct', () => {
    expect(configSelectors.getLocale.resultFunc(mockParameters)).toEqual(mockParameters.locale);
  });
});

describe('getConfigData', () => {
  it('getConfigData work correct', () => {
    const mockParameters = {
      config: { configData: 'configData' },
    };

    expect(configSelectors.getConfigData.resultFunc(mockParameters.config)).toEqual(mockParameters.config.configData);
  });
});

describe('getDatePickerInputs', () => {
  it('getDatePickerInputs work correct', () => {
    const mockParameters = {
      configData: { datePickerInputs: 'datePickerInputs' },
    };

    expect(configSelectors.getDatePickerInputs.resultFunc(mockParameters.configData)).toEqual(mockParameters.configData.datePickerInputs);
  });
});

describe('getDatePickerButton', () => {
  it('getDatePickerButton work correct', () => {
    const mockParameters = {
      configData: { datePickerButton: 'datePickerButton' },
    };

    expect(configSelectors.getDatePickerButton.resultFunc(mockParameters.configData)).toEqual(mockParameters.configData.datePickerButton);
  });
});

describe('getLanguagePickerButton', () => {
  it('getLanguagePickerButton work correct', () => {
    const mockParameters = {
      configData: { languagePickerButtons: 'languagePickerButtons' },
    };

    expect(configSelectors.getLanguagePickerButton.resultFunc(mockParameters.configData)).toEqual(mockParameters.configData.languagePickerButtons);
  });
});
