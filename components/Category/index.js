import { connect } from 'react-redux';
import Component from './Category';
import * as topicsSelector from 'redux/selectors/topics';
import * as configSelectors from 'redux/selectors/config';
import { putCategoryInStore } from 'redux/actions/actions';

const mapStateToProps = state => ({
  topics: topicsSelector.getTopics(state),
  headerModalButton: configSelectors.getHeaderModalButton(state),
  headerModalText: configSelectors.getHeaderModalText(state),
});

const mapDispatchToProps = dispatch => ({
  putCategoryInStore: payload => dispatch(putCategoryInStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
