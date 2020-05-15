import { getTopicsStore, getTopics } from '../topics.js';

describe('getNewsStore', () => {
  let state;

  beforeAll(() => {
    state = { topics: 'topics' };
  });

  it('getTopicsStore work correct', () => {
    expect(getTopicsStore(state)).toEqual(state.topics);
  });

  it('getTopicsStore failed with incorrect data', () => {
    expect(getTopicsStore(state)).not.toEqual(state.state);
  });
});

describe('getTopics', () => {
  it('getTopics work correct', () => {
    const mockParameters = {
      topics: { topicsData: 'topicsData' },
    };

    expect(getTopics.resultFunc(mockParameters.topics)).toEqual(mockParameters.topics.topicsData);
  });
});
