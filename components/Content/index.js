import { connect } from 'react-redux';
import * as newsSelector from '~/redux/selectors/news.js';
import * as topicsSelector from '~/redux/selectors/topics.js';
import * as filterNewsSelector from '~/redux/selectors/filterNews.js';
import { getDefaultNews } from '~/redux/actions/actions.js';
import * as configSelectors from '~/redux/selectors/config.js';
import Component from './Content.js';

const mapStateToProps = state => ({
  news: newsSelector.getNews(state),
  topics: topicsSelector.getTopics(state),
  dateFrom: filterNewsSelector.getDateFrom(state),
  dateTo: filterNewsSelector.getDateTo(state),
  datePickerInputs: configSelectors.getDatePickerInputs(state),
  datePickerButton: configSelectors.getDatePickerButton(state),
  activePage: filterNewsSelector.getActivePage(state),
  totalPages: filterNewsSelector.getTotalPages(state),
  languagePickerButtons: configSelectors.getLanguagePickerButton(state),
  headerModalButton: configSelectors.getHeaderModalButton(state),
  headerModalText: configSelectors.getHeaderModalText(state),
});

const mapDispatchToProps = dispatch => ({
  getDefaultNews: payload => dispatch(getDefaultNews(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
