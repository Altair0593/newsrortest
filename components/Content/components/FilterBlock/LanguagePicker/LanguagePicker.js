import React, { useState } from 'react';
import { Menu, Flag } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { StyledFlexDiv } from 'components/Content/styled';
import { FormattedMessage } from 'react-intl';

const LanguagePicker = ({ languagePickerButtons, changeLanguage, getDefaultNews }) => {
  const [activeItem, setActiveItem] = useState('');

  const changeLanguageState = (event, { value }) => {
    setActiveItem(value);
    changeLanguage(value);
    getDefaultNews();
  };

  return (
    <StyledFlexDiv marginSmall='20px 0 auto'>
      {languagePickerButtons.map(el =>
        <StyledFlexDiv key={el.id} width='150px'>
          <Menu text>
            <Menu.Item
              active={activeItem === el.value}
              onClick={changeLanguageState}
              value={el.value}
              data-at={el.dataAt}
              id={el.id}
              color={'red'}
            >
              <Flag
                name={el.flag}
              />
              <FormattedMessage
                id={el.content}
                defaultMessage='Add Topic'
              />
            </Menu.Item>
          </Menu>
        </StyledFlexDiv>
      )}
    </StyledFlexDiv>
  );
};

LanguagePicker.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  languagePickerButtons: PropTypes.array.isRequired,
};

export default LanguagePicker;
