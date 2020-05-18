import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import colors from 'managers/themeManager/colorMatrix';

export const StyledHeader = styled(Header)`
  &&&& {
    color: ${colors.color__04};
  }
  ::first-letter {
    text-transform: uppercase;
  }
`;
