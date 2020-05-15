import { useContext, useState } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledFlexDiv } from 'components/Content/styled';
import { DatePickerStyled } from './styled';
import { ThemeContext } from 'styled-components';

const DatePickers = ({
    datePickerInputs,
    datePickerButton,
    putDateInStore,
  }) => {
  const [dateFromState, setDateFromState] = useState(new Date());
  const [dateToState, setDateToState] = useState(new Date());

  const themeNews = useContext(ThemeContext).newsPage;
  const intl = useIntl();

  const changeDateFilterFrom = (date) => {
    setDateFromState(date);
  };

  const changeDateFilterTo = date => {
    setDateToState(date);
  };

  const setNewDate = async () => {
    await putDateInStore({ dateFrom: dateFromState, dateTo: dateToState });
  };

  return (
    <>
      {datePickerInputs.map(el =>
        <StyledFlexDiv marginSmall='20px 10px' key={el.id}>
          <DatePickerStyled
            border={themeNews.datePickerBorder}
            name={el.name}
            maxDate={new Date()}
            selected={el.name === 'dateFrom' ? dateFromState : dateToState}
            onChange={el.name === 'dateFrom' ? changeDateFilterFrom : changeDateFilterTo}
          />
        </StyledFlexDiv>
      )}
      <StyledFlexDiv marginSmall='20px 10px'>
        <Button
          primary
          content={intl.formatMessage({ id: datePickerButton.content })}
          onClick={setNewDate}
        />
      </StyledFlexDiv>
    </>
  );
};

DatePickers.propTypes = {
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
  putDateInStore: PropTypes.func.isRequired,
};

export default DatePickers;
