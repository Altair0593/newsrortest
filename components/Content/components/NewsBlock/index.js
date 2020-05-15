import { connect } from 'react-redux';
import * as newsSelector from 'redux/selectors/news';
import { getDefaultNews } from 'redux/actions/actions';
import Component from './NewsBlock';

const mapStateToProps = state => ({
  news: newsSelector.getNews(state),
});

const mapDispatchToProps = dispatch => ({
  getDefaultNews: () => dispatch(getDefaultNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
