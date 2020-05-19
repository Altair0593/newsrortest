import LanguagePicker from '../LanguagePicker';
import config from 'constants/config';

describe('LanguagePicker', () => {
  let props;

  beforeEach(() => {
    props = {
      languagePickerButtons: config.languagePickerButtons,
      putLanguageInStore: jest.fn(x => true),
      language: 'language',
      getDefaultNews: jest.fn(x => true),
      changeActivePage: jest.fn(() => true),
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
