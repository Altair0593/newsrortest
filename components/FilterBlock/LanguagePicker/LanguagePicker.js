import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ContainerBlock, ElementContainerBlock } from '../styled.js';

const LanguagePicker = ({ languagePickerButtons }) => {
  const intl = useIntl();

  const [activeBtn, setActiveBtn] = useState('');

  const changeLanguage = (event, { value }) => {
    setActiveBtn(value);
  };

  return <ContainerBlock>
    {languagePickerButtons.map(el =>
      <ElementContainerBlock elContainerBlockWidth={'18%'} key={el.id}>
        <Button
          active={activeBtn === el.value}
          fluid
          color={activeBtn === el.value ? 'teal' : 'blue'}
          content={intl.formatMessage({ id: el.content })}
          onClick={changeLanguage}
          value={el.value}
          data-at={el.dataAt}
          id={el.id}
        />
      </ElementContainerBlock>
    )}
  </ContainerBlock>;
};

LanguagePicker.propTypes = {
  languagePickerButtons: PropTypes.array.isRequired,
};

export default React.memo(LanguagePicker);
