import { checkInputValue } from '../validation';

describe('checkInputValue works correctly', () => {
  it('must return true', () => {
    const mockEvent = {
      key: 'n',
    };

    expect(checkInputValue(mockEvent)).toBe(true);
  });

  it('must return true', () => {
    const mockEvent = {
      key: 'o',
    };

    expect(checkInputValue(mockEvent)).toBe(true);
  });

  it('must return true', () => {
    const mockEvent = {
      key: 'r',
    };

    expect(checkInputValue(mockEvent)).toBe(true);
  });

  it('must return true', () => {
    const mockEvent = {
      key: 'm',
    };

    expect(checkInputValue(mockEvent)).toBe(true);
  });

  it('must return false', () => {
    const mockEvent = {
      key: 'ж',
      preventDefault: function () {
        return false;
      },
      stopPropagation: function () {
        return false;
      },
    };
    expect(checkInputValue(mockEvent)).toBe(false);
  });

  it('must return false', () => {
    const mockEvent = {
      key: '2',
      preventDefault: function () {
        return false;
      },
      stopPropagation: function () {
        return false;
      },
    };
    expect(checkInputValue(mockEvent)).toBe(false);
  });

  it('must return false', () => {
    const mockEvent = {
      key: '/',
      preventDefault: function () {
        return false;
      },
      stopPropagation: function () {
        return false;
      },
    };
    expect(checkInputValue(mockEvent)).toBe(false);
  });

  it('must return false', () => {
    const mockEvent = {
      key: '.',
      preventDefault: function () {
        return false;
      },
      stopPropagation: function () {
        return false;
      },
    };
    expect(checkInputValue(mockEvent)).toBe(false);
  });
});
