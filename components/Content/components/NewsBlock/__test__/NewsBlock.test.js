import NewsBlock from '../NewsBlock';
import initialState from '__mocks__/mockNews';

describe('NewsBlock render', () => {
  let wrapper;

  const props = {
    news: initialState,
    isError: false,
    errorMessage: 'errorMessage',
  };
  beforeEach(() => {
    wrapper = shallowSmart(<NewsBlock {...props} />);
  });

  it('NewsBlock mountRender', () => {
    mountSmart(<NewsBlock {...props} />);
  });

  it('NewsBlock snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
