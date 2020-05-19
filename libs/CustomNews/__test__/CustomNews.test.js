import CustomNews from '../CustomNews';

describe('CustomNews render', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallowSmart(<CustomNews />);
  });

  it('CustomNews mountRender', () => {
    mountSmart(<CustomNews />);
  });

  it('NewsBlock snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
