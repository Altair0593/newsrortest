import mockNews from '../__mocks__/mockNews';
import { datePickerButton, datePickerInputs } from './configHelper/datePicker';
import { languagePickerButtons } from './configHelper/languagePicker';
import mockTopics from './mockTopics';
import { headerModalButton, headerModalText } from './configHelper/headerHelper';
import { customNews } from './configHelper/customNews';

export default {
  mockNews,
  mockTopics,
  defaultTheme: 'light',
  defaultLocale: 'en-Us',
  datePickerInputs,
  datePickerButton,
  headerModalButton,
  headerModalText,
  languagePickerButtons,
  customNews,
};
