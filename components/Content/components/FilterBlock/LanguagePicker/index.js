import { connect } from 'react-redux';
import Component from './LanguagePicker';
import * as configSelectors from 'redux/selectors/config';
import * as actions from 'redux/actions/actions';

const mapStateToProps = state => ({
  languagePickerButtons: configSelectors.getLanguagePickerButton(state),
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: payload => dispatch(actions.changeLanguage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
