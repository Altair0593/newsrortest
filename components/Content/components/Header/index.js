import { connect } from 'react-redux';
import Header from './Header';
import * as topicsSelector from 'redux/selectors/topics';
import * as configSelectors from 'redux/selectors/config';
import * as filerNews from 'redux/selectors/filterNews';
import * as actions from 'redux/actions/actions';

const mapStateToProps = state => ({
  topics: topicsSelector.getTopics(state),
  headerModalButton: configSelectors.getHeaderModalButton(state),
  headerModalText: configSelectors.getHeaderModalText(state),
  currentCategory: filerNews.getCategory(state),
});

const mapDispatchToProps = dispatch => ({
  addNewTopic: payload => dispatch(actions.addNewTopic(payload)),
  getDefaultNews: () => dispatch(actions.getDefaultNews()),
  putCategoryInStore: payload => dispatch(actions.putCategoryInStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);