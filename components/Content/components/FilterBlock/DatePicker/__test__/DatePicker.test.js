import DatePicker from '../DatePicker';
import config from 'constants/config';

describe('DatePicker', () => {
  let props;

  beforeEach(() => {
    props = {
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      datePickerInputs: config.datePickerInputs,
      datePickerButton: config.datePickerButton,
      isError: true,
      changeActivePage: jest.fn(() => true),
      changeIsError: jest.fn(x => true),
      getDefaultNews: jest.fn(x => true),
      putDateInStore: jest.fn(x => true),
    };
  });

  it('DatePicker shallow render', () => {
    const wrapper = shallowSmart(DatePicker, props);

    expect(wrapper).toMatchSnapshot();
  });
});
