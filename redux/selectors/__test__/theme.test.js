import { getThemeStore, getCurrentTheme } from '../theme';

describe('themeSelectors', () => {
  let state;

  beforeEach(() => {
    state = {
      theme: { currentTheme: 'currentTheme' },
    };
  });

  describe('getThemeStore', () => {
    it('getThemeStore work correct with correct data', () => {
      expect(getThemeStore(state)).toEqual(state.theme);
    });

    it('getThemeStore work correct with incorrect data', () => {
      expect(getThemeStore(state.theme)).not.toEqual(state.theme);
    });
  });

  describe('getCurrentTheme', () => {
    it('getCurrentTheme work correct with correct data', () => {
      expect(getCurrentTheme.resultFunc(state.theme)).toEqual(state.theme.currentTheme);
    });

    it('getCurrentTheme work correct with incorrect data', () => {
      expect(getCurrentTheme.resultFunc(state.theme.currentTheme)).not.toEqual(state.theme.currentTheme);
    });
  });
});
