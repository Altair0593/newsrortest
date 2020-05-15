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
    };
  });

  it('DatePicker shallow render', () => {
    const wrapper = shallowSmart(DatePicker, props);

    expect(wrapper).toMatchSnapshot();
  });
});
