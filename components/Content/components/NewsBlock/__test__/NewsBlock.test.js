import NewsBlock from '../NewsBlock.js';
import { initialState } from '../../../../../redux/reducers/newsReducer.js';
import { NewsWrapper, NewsItem, ItemExtraWrapper } from '../styled.js';

jest.mock('../NewsBlock.js', () => 'newsBlock');

describe('<NewsBlock/>', () => {
  let wrapper;

  const props = {
    news: initialState,
  };
  beforeEach(() => {
    wrapper = shalowRender(<NewsBlock {...props}/>);
  });

  it('snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('NewsBlock styled components', () => {
  let wrapper;

  it('NewsItem should have correct styles', () => {
    wrapper = getTreeSC(<NewsItem/>);
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('padding', '10px');
    expect(wrapper).toHaveStyleRule('margin', '20px 0 0 0');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
  });

  it('ItemExtraWrapper should have correct styles', () => {
    wrapper = getTreeSC(<ItemExtraWrapper/>);
    expect(wrapper).toHaveStyleRule('display', 'flex');
  });
});
