import ErrorBlock from '../ErrorBlock';

describe('CustomNews render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowSmart(<ErrorBlock />);
  });

  it('CustomNews mountRender', () => {
    mountSmart(<ErrorBlock />);
  });

  it('NewsBlock snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
