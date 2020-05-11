import React, { useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ContainerBlock, ElementContainerBlock } from '../styled.js';

const DatePicker = ({ dateFrom, dateTo, datePickerInputs, datePickerButton }) => {
  const intl = useIntl();

  const [dateFromState, setDateFromState] = useState(dateFrom);
  const [dateToState, setDateToState] = useState(dateTo);

  const changeDateFilter = (event, { name, value }) => {
    name === 'dateFrom' ? setDateFromState(value) : setDateToState(value);
  };

  return <ContainerBlock>
    {datePickerInputs.map(el =>
      <DateInput
        key={el.name}
        popupPosition={el.popupPosition}
        minDate={el.minDate}
        maxDate={el.maxDate}
        pickerWidth={el.pickerWidth}
        name={el.name}
        value={el.name === 'dateFrom' ? dateFromState : dateToState}
        onChange={el.onChangeCallback === 'changeDateFilter' && changeDateFilter}
      />,
    )}
    <ElementContainerBlock>
      <Button
        primary
        content={intl.formatMessage({ id: datePickerButton.content })}
        onClick={() => true}
      />
    </ElementContainerBlock>
  </ContainerBlock>;
};

DatePicker.propTypes = {
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
};

export default React.memo(DatePicker);
