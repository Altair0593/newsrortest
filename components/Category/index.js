import { connect } from 'react-redux';
import Component from './Category';
import * as topicsSelector from 'redux/selectors/topics';
import * as configSelectors from 'redux/selectors/config';
import * as actions from 'redux/actions/actions';

const mapStateToProps = state => ({
  topics: topicsSelector.getTopics(state),
  headerModalButton: configSelectors.getHeaderModalButton(state),
  headerModalText: configSelectors.getHeaderModalText(state),
});

const mapDispatchToProps = dispatch => ({
  addNewTopic: payload => dispatch(actions.addNewTopic(payload)),
  putCategoryInStore: payload => dispatch(actions.putCategoryInStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
