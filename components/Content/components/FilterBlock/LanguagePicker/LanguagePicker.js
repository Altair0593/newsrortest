import { useContext } from 'react';
import { Flag } from 'semantic-ui-react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFlexDiv, MenuItemStyled } from 'components/Content/styled';
import { FormattedMessage } from 'react-intl';

const LanguagePicker = ({
  language,
  getDefaultNews,
  changeActivePage,
  putLanguageInStore,
  languagePickerButtons,
  }) => {
  const themeNews = useContext(ThemeContext).newsPage;

  const changeLanguageState = (event, { value }) => {
    if (language === value) {
      return;
    }
    putLanguageInStore(value);
    changeActivePage(1);
    getDefaultNews();
  };

  return (
    <StyledFlexDiv>
      {languagePickerButtons.map(el =>
        <StyledFlexDiv key={el.id} width='150px'>
          <MenuItemStyled text>
            <MenuItemStyled
              active={language === el.value}
              onClick={changeLanguageState}
              value={el.value}
              data-at={el.dataAt}
              id={el.id}
              fontColor={language === el.value ? themeNews.languageColor : themeNews.textColor}
            >
              <Flag
                name={el.flag}
              />
              <FormattedMessage
                id={el.content}
                defaultMessage='Add Topic'
              />
            </MenuItemStyled>
          </MenuItemStyled>
        </StyledFlexDiv>
      )}
    </StyledFlexDiv>
  );
};

LanguagePicker.propTypes = {
  language: PropTypes.string.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  putLanguageInStore: PropTypes.func.isRequired,
  languagePickerButtons: PropTypes.array.isRequired,
};

export default LanguagePicker;
