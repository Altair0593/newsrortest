import configureStore from 'redux-mock-store';
import Content from '../Content';
import Header from 'components/Content/components/Header';
import FilterBlock from '../components/FilterBlock/FilterBlock';
import NewsBlock from '../components/NewsBlock';
import Pagination from '../components/Pagination';

describe('Content render correctly', () => {
  const mockStore = configureStore();
  const store = mockStore({});
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Content/>);
  });

  it('Content render correctly with create snapshot (shallow)', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Header mount render', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('FilterBlock mount render', () => {
    expect(wrapper.find(FilterBlock)).toHaveLength(1);
  });

  it('Header mount render', () => {
    expect(wrapper.find(NewsBlock)).toHaveLength(1);
  });

  it('Pagination mount render', () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
