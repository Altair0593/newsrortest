import { connect } from 'react-redux';
import * as configSelectors from 'redux/selectors/config';
import * as actions from 'redux/actions/actions';
import Component from './DatePicker';

const mapStateToProps = state => ({
  datePickerInputs: configSelectors.getDatePickerInputs(state),
  datePickerButton: configSelectors.getDatePickerButton(state),
});

const mapDispatchToProps = dispatch => ({
  putDateInStore: payload => dispatch(actions.putDateInStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
