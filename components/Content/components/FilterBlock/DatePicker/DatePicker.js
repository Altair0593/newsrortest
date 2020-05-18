import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledFlexDiv } from 'components/Content/styled';
import { DatePickerStyled } from './styled';
import { ButtonStyled } from 'styled';
import { checkDates } from 'utils/validation';

const DatePickers = ({
 dateTo,
 dateFrom,
 isError,
 changeIsError,
 putDateInStore,
 getDefaultNews,
 datePickerInputs,
 datePickerButton,
}) => {
  const themeNews = useContext(ThemeContext).newsPage;
  const intl = useIntl();
  const changeDateFilterFrom = (date) => {
    putDateInStore({ dateFrom: date });
  };

  const changeDateFilterTo = date => {
    putDateInStore({ dateTo: date });
  };

  const setNewDate = () => {
    const result = checkDates(dateTo, dateFrom);
    if (!result) {
      changeIsError(true);
      return;
    }
    getDefaultNews();
  };

  const handleChangeIsError = () => {
    changeIsError(false);
  };

  return (
    <>
      {datePickerInputs.map(el =>
        <StyledFlexDiv marginSmall='20px 10px' key={el.id}>
          <DatePickerStyled
            border={!isError ? themeNews.datePickerBorder : themeNews.redBorder }
            name={el.name}
            dateFormat={el.dateFormat}
            maxDate={new Date()}
            selected={el.name === 'dateFrom' ? dateFrom : dateTo}
            onChange={el.name === 'dateFrom' ? changeDateFilterFrom : changeDateFilterTo}
            onFocus={handleChangeIsError}
          />
        </StyledFlexDiv>
      )}
      <StyledFlexDiv marginSmall='20px 10px'>
        <ButtonStyled
          hasBgColor={themeNews.buttonBg}
          hasBgColorHover={themeNews.buttonBgHover}
          content={intl.formatMessage({ id: datePickerButton.content })}
          onClick={setNewDate}
          fontColor={themeNews.textColor}
        />
      </StyledFlexDiv>
    </>
  );
};

DatePickers.propTypes = {
  dateTo: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired,
  dateFrom: PropTypes.number.isRequired,
  changeIsError: PropTypes.func.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  putDateInStore: PropTypes.func.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
};

export default DatePickers;
