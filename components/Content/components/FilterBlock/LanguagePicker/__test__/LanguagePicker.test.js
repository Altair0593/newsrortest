import LanguagePicker from '../LanguagePicker';
import config from 'constants/config';

describe('LanguagePicker', () => {
  let props;

  beforeEach(() => {
    props = {
      languagePickerButtons: config.languagePickerButtons,
      changeLanguage: jest.fn(x => true),
    };
  });

  it('LanguagePicker shallowRender', () => {
    const wrapper = shallowSmart(LanguagePicker, props);

    expect(wrapper).toMatchSnapshot();
  });

  it('LanguagePicker render correct', () => {
    mountSmart(<LanguagePicker {...props} />);
  });
});
