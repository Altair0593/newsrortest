import { topicsReducer } from '../topicsReducer';

describe('topicsReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      topicsData: [
        {
          name: 'name',
          category: 'category',
          dataAt: 'data-at',
        },
      ],
    };
  });

  it('topicsReducer must return state', () => {
    const action = { type: '', payload: 'payload' };
    expect(topicsReducer(initialState, action)).toEqual(initialState);
  });
});
