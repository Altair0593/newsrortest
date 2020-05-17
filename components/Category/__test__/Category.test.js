import Category from '../Category';
import mockTopics from 'constants/mockTopics';

describe('Category', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { topics: mockTopics };
    wrapper = shallowSmart(<Category { ...props }/>);
  });

  it('Category render correct', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Category mount correct', () => {
    mountSmart(<Category { ...props }/>);
  });
});
