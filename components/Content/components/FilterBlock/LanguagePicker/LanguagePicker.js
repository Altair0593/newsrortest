import { useContext } from 'react';
import { Menu, Flag } from 'semantic-ui-react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFlexDiv, MenuItemStyled } from 'components/Content/styled';
import { FormattedMessage } from 'react-intl';

const LanguagePicker = ({
  category,
  getDefaultNews,
  putLanguageInStore,
  languagePickerButtons,
}) => {
  const themeNews = useContext(ThemeContext).newsPage;

  const changeLanguageState = (event, { value }) => {
    putLanguageInStore(value);
    getDefaultNews();
  };

  return (
    <StyledFlexDiv marginSmall='20px 0 auto'>
      {languagePickerButtons.map(el =>
        <StyledFlexDiv key={el.id} width='150px'>
          <Menu text>
            <MenuItemStyled
              active={category === el.value}
              onClick={changeLanguageState}
              value={el.value}
              data-at={el.dataAt}
              id={el.id}
              fontColor={themeNews.textColor}
            >
              <Flag
                name={el.flag}
              />
              <FormattedMessage
                id={el.content}
                defaultMessage='Add Topic'
              />
            </MenuItemStyled>
          </Menu>
        </StyledFlexDiv>
      )}
    </StyledFlexDiv>
  );
};

LanguagePicker.propTypes = {
  category: PropTypes.string.isRequired,
  putLanguageInStore: PropTypes.func.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  languagePickerButtons: PropTypes.array.isRequired,
};

export default LanguagePicker;
