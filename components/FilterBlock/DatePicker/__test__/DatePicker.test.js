import DatePicker from '../DatePicker.js';
import config from '../../../../constants/config';

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

  it('DatePicker render correc', () => {
    mountSmart(<DatePicker {...props}/>);
  });
});
