import Header from '../Header';
import topics from '__mocks__/mockTopics';
import mockDataConfig from '__mocks__/mockConfigData';

describe('<Header/>', () => {
  let wrapper;
  const props = {
    topics: topics,
    headerModalButton: mockDataConfig.headerModalButton,
    headerModalText: mockDataConfig.headerModalText,
  };

  beforeEach(() => {
    wrapper = shallowSmart(<Header {...props}/>);
  });

  it('snapshot created, should rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Render correctly with snapshot (renderer.create)', () => {
    mountSmart(<Header {...props}/>);
  });
});
