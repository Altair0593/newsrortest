import Category from '../Category';
import mockTopics from 'constants/mockTopics';
import { headerModalButton, headerModalText } from 'constants/configHelper/headerHelper';

describe('Category', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      topics: mockTopics,
      addNewTopic: jest.fn(() => true),
      headerModalText,
      headerModalButton,
      putCategoryInStore: jest.fn(() => true),

    };
    wrapper = shallowSmart(<Category { ...props }/>);
  });

  it('Category render correct', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Category mount correct', () => {
    mountSmart(<Category { ...props }/>);
  });
});
