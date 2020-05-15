import { connect } from 'react-redux';
import Header from './Header';
import * as topicsSelector from 'redux/selectors/topics';
import * as configSelectors from 'redux/selectors/config';
import * as filerNews from 'redux/selectors/filterNews';

const mapStateToProps = state => ({
  topics: topicsSelector.getTopics(state),
  headerModalButton: configSelectors.getHeaderModalButton(state),
  headerModalText: configSelectors.getHeaderModalText(state),
  currentCategory: filerNews.getCategory(state),
});

export default connect(mapStateToProps)(Header);
