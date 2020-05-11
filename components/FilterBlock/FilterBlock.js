import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker/DatePicker.js';
import LanguagePicker from './LanguagePicker/LanguagePicker.js';
import { Container, ElementContainer } from './styled.js';

const FilterBlock = ({ languagePickerButtons, dateFrom, dateTo, datePickerInputs, datePickerButton }) => {
  return <Container>
    <ElementContainer elContainerWidth={'100%'} elContainerMargin={'10px 0'}>
      <DatePicker
        dateFrom={dateFrom}
        dateTo={dateTo}
        datePickerInputs={datePickerInputs}
        datePickerButton={datePickerButton}
      />
    </ElementContainer>
    <ElementContainer>
      <LanguagePicker
        languagePickerButtons={languagePickerButtons}
      />
    </ElementContainer>
  </Container>;
};

FilterBlock.propTypes = {
  languagePickerButtons: PropTypes.array.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
};

export default React.memo(FilterBlock);
