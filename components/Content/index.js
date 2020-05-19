import { connect } from 'react-redux';
import Component from './Content';
import * as actions from 'redux/actions/actions';

const mapDispatchToProps = dispatch => ({
  resetStoreToDefault: payload => dispatch(actions.resetStoreToDefault(payload)),
});

export default connect(null, mapDispatchToProps)(Component);