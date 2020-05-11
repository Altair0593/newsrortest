import LanguagePicker from '../LanguagePicker.js';
import config from '../../../../constants/config';

describe('LanguagePicker', () => {
  let props;

  beforeEach(() => {
    props = {
      languagePickerButtons: config.languagePickerButtons,
    };
  });

  it('LanguagePicker render correct', () => {
    mountSmart(<LanguagePicker {...props}/>);
  });
});
