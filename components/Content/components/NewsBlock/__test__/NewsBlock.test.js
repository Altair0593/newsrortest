import NewsBlock from '../NewsBlock';
import initialState from '__mocks__/mockNews';

describe('NewsBlock render', () => {
  let wrapper;

  const props = {
    news: initialState,
  };
  beforeEach(() => {
    wrapper = shallowWithTheme(<NewsBlock {...props} />);
  });

  it('NewsBlock mountRender', () => {
    mountRender(<NewsBlock {...props} />);
  });

  it('NewsBlock snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
