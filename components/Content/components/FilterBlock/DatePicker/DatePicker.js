import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledFlexDiv } from 'components/Content/styled';
import { DatePickerStyled, StyledTittle } from './styled';
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
 changeActivePage,
 currentCategory,
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
    const result = checkDates(dateFrom, dateTo);
    if (!result) {
      changeIsError(true);
      return;
    }
    changeActivePage(1);
    getDefaultNews();
  };

  const handleChangeIsError = () => {
    changeIsError(false);
  };

  return (
    <>
      <StyledTittle size='large'>
        {intl.formatMessage({ id: 'news' }, { currentCategory })}
      </StyledTittle>
      {datePickerInputs.map(el =>
        <StyledFlexDiv marginSmall='5px 10px' key={el.id}>
          <DatePickerStyled
            border={!isError ? themeNews.datePickerBorder : themeNews.redBorder}
            name={el.name}
            dateFormat={el.dateFormat}
            maxDate={new Date()}
            selected={el.name === 'dateFrom' ? dateFrom : dateTo}
            onChange={el.name === 'dateFrom' ? changeDateFilterFrom : changeDateFilterTo}
            onFocus={handleChangeIsError}
            data-at={el.dataAt}
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
  currentCategory: PropTypes.string.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  datePickerButton: PropTypes.object.isRequired,
};

export default DatePickers;
