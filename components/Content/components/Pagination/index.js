import { connect } from 'react-redux';
import * as filterNewsSelector from 'redux/selectors/filterNews';
import * as newsSelector from 'redux/selectors/news';
import Component from './Pagination';
import * as actions from 'redux/actions/actions';

const mapStateToProps = state => ({
  totalPages: filterNewsSelector.getTotalPages(state),
  news: newsSelector.getNews(state),
});

const mapDispatchToProps = dispatch => ({
  changeActivePage: payload => dispatch(actions.changeActivePage(payload)),
  getDefaultNews: () => dispatch(actions.getDefaultNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
