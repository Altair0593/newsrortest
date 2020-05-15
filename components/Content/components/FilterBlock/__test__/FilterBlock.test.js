import FilterBlock from '../FilterBlock';
import DatePicker from '../DatePicker';
import LanguagePicker from '../LanguagePicker';

describe('FilterBlock', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<FilterBlock/>);
  });

  it('FilterBlock render correct', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('DatePicker mount render', () => {
    expect(wrapper.find(DatePicker)).toHaveLength(1);
  });

  it('LanguagePicker mount render', () => {
    expect(wrapper.find(LanguagePicker)).toHaveLength(1);
  });
});
