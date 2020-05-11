import Content from '../Content.js';
import config from '../../../constants/config.js';
import mockNews from '../../../constants/mockNews.js';

describe('Component render correctly', () => {
  let props;

  beforeEach(() => {
    props = {
      news: mockNews.articles,
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      datePickerInputs: config.datePickerInputs,
      datePickerButton: config.datePickerButton,
      languagePickerButtons: config.languagePickerButtons,
    };
  });

  it('Render correctly with snapshot (renderer.create)', () => {
    const tree = mountSmart(<Content { ...props }/>);
    expect(tree).toMatchSnapshot();
  });

  it('Render correctly with create snapshot (shallow)', () => {
    createSnapshot(<Content { ...props }/>);
  });
});
