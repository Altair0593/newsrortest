import { connect } from 'react-redux';
import * as newsSelector from 'redux/selectors/news';
import { getDefaultNews, changeIsLoaded } from 'redux/actions/actions';
import Component from './NewsBlock';

const mapStateToProps = state => ({
  news: newsSelector.getNews(state),
  isLoaded: newsSelector.getIsLoadedValue(state),
  errorMessage: newsSelector.getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  getDefaultNews: () => dispatch(getDefaultNews()),
  changeIsLoaded: payload => dispatch(changeIsLoaded(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
