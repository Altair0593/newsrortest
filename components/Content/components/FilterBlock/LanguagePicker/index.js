import { connect } from 'react-redux';
import Component from './LanguagePicker';
import * as configSelectors from 'redux/selectors/config';
import * as actions from 'redux/actions/actions';
import * as filterSelector from 'redux/selectors/filterNews';

const mapStateToProps = state => ({
  language: filterSelector.getLanguage(state),
  languagePickerButtons: configSelectors.getLanguagePickerButton(state),
});

const mapDispatchToProps = dispatch => ({
  getDefaultNews: () => dispatch(actions.getDefaultNews()),
  putLanguageInStore: payload => dispatch(actions.putLanguageInStore(payload)),
  changeActivePage: payload => dispatch(actions.changeActivePage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
