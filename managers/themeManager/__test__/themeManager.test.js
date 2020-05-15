import { themeReducer, initialState } from '../reducer';

describe('Testing themeReducer: ', () => {
  it('themeReducer returning default state', () => {
    const action = { type: 'TYPE' };
    expect(themeReducer(initialState, action)).toEqual(initialState);
  });
});
