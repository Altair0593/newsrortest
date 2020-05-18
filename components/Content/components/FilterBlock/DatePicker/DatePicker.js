import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledFlexDiv } from 'components/Content/styled';
import { DatePickerStyled } from './styled';
import { ButtonStyled } from 'styled';

const DatePickers = ({
  dateTo,
  dateFrom,
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
    getDefaultNews();
  };

  return (
    <>
      {datePickerInputs.map(el =>
        <StyledFlexDiv marginSmall='20px 10px' key={el.id}>
          <DatePickerStyled
            border={themeNews.datePickerBorder}
            name={el.name}
            dateFormat={el.dateFormat}
            maxDate={new Date()}
            selected={el.name === 'dateFrom' ? dateFrom : dateTo}
            onChange={el.name === 'dateFrom' ? changeDateFilterFrom : changeDateFilterTo}
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
  dateFrom: PropTypes.number.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  putDateInStore: PropTypes.func.isRequired,
  datePickerInputs: PropTypes.array.isRequired,
  datePickerButton: PropTypes.object.isRequired,
};

export default DatePickers;
