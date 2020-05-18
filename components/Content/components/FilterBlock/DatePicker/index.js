import { connect } from 'react-redux';
import * as configSelectors from 'redux/selectors/config';
import * as actions from 'redux/actions/actions';
import * as filterSelectors from 'redux/selectors/filterNews';
import Component from './DatePicker';

const mapStateToProps = state => ({
  dateTo: filterSelectors.getDateTo(state),
  dateFrom: filterSelectors.getDateFrom(state),
  datePickerButton: configSelectors.getDatePickerButton(state),
  datePickerInputs: configSelectors.getDatePickerInputs(state),
});

const mapDispatchToProps = dispatch => ({
  getDefaultNews: () => dispatch(actions.getDefaultNews()),
  putDateInStore: payload => dispatch(actions.putDateInStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
