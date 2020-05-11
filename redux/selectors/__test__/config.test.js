import { getConfigStore, getLocale } from '../config.js';

describe('getConfigStore', () => {
  let state;

  beforeAll(() => {
    state = { config: 'config' };
  });

  it('getConfigStore work correct', () => {
    expect(getConfigStore(state)).toEqual(state.config);
  });

  it('getConfigStore failed with incorrect data', () => {
    expect(getConfigStore(state)).not.toEqual(state.state);
  });
});

describe('getLocale', () => {
  it('getLocale work correct', () => {
    const mockParameters = {
      config: { locale: 'locale' },
    };

    expect(getLocale.resultFunc(mockParameters.config)).toEqual(mockParameters.config.locale);
  });
});
