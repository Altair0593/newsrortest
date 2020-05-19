import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import colorMatrix from 'managers/themeManager/colorMatrix';
import { Header } from 'semantic-ui-react';
import colors from 'managers/themeManager/colorMatrix';

export const DatePickerStyled = styled(DatePicker)`
   border: ${props => `2px solid ${props.border ? props.border : colorMatrix.color__02}`};
   border-radius: 5px;
   padding: 10px;
`;

export const StyledTittle = styled(Header)`
  &&&& {
    color: ${colors.color__04};
    position: absolute;
    left: 20px;
  }
  ::first-letter {
    text-transform: uppercase;
  }
`;
