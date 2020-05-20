import ErrorBlock from '../ErrorBlock';

describe('CustomNews render', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      hasShadow: 'hasShadow',
      errorMessage: 'errorMessage',
    };
  });

  beforeEach(() => {
    wrapper = shallowSmart(<ErrorBlock { ...props }/>);
  });

  it('CustomNews mountRender', () => {
    mountSmart(<ErrorBlock { ...props }/>);
  });

  it('NewsBlock snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
