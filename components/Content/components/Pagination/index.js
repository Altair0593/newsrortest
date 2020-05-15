import { connect } from 'react-redux';
import * as filterNewsSelector from 'redux/selectors/filterNews';
import Component from './Pagination';

const mapStateToProps = state => ({
  activePage: filterNewsSelector.getActivePage(state),
  totalPages: filterNewsSelector.getTotalPages(state),
});

export default connect(mapStateToProps, null)(Component);
