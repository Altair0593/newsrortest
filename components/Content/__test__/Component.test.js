import configureStore from 'redux-mock-store';
import Content from '../index';
import Header from 'components/Content/components/Header/Header';
import FilterBlock from '../components/FilterBlock/FilterBlock';
import NewsBlock from '../components/NewsBlock/NewsBlock';
import Pagination from '../components/Pagination/Pagination';
import mockInitialState from '__mocks__/mockInitialState';

jest.mock('../components/FilterBlock/FilterBlock', () => 'FilterBlock');
jest.mock('components/Content/components/Header/Header', () => 'HeaderBlock');
jest.mock('../components/NewsBlock/NewsBlock', () => 'NewsBlockPage');
jest.mock('../components/Pagination/Pagination', () => 'PaginationBlock');

describe('Content render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore(mockInitialState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountSmart(<Content/>, store);
  });

  it('FilterBlock mount render', () => {
    expect(wrapper.find(FilterBlock)).toHaveLength(1);
  });

  it('Header mount render', () => {
    console.log(wrapper.debug())
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('NewsBlock mount render', () => {
    expect(wrapper.find(NewsBlock)).toHaveLength(1);
  });

  it('Pagination mount render', () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
