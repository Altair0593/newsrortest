import styled, { css } from 'styled-components';
import { Container } from 'semantic-ui-react';
import colors from 'managers/themeManager/colorMatrix';

export const sizesStyles = css`
  ${({ margin = '0' }) => margin && `margin: ${margin}`};
  ${({ padding = '0' }) => padding && `padding: ${padding}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ maxHeight }) => maxHeight && `maxHeight: ${maxHeight}`};
  ${({ maxWidth }) => maxWidth && `maxWidth: ${maxWidth}`};
  ${({ minWidth }) => minWidth && `minWidth: ${minWidth}`};
`;

export const flexStyles = css`
  display: flex;
  align-items: ${({ alignItems = 'center' }) => alignItems};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
`;

export const StyledFlexDiv = styled.div`
  &&&& {
    ${flexStyles}
    ${sizesStyles}
    ${({ hasFocus }) => `border-color: ${hasFocus ? hasFocus : 'none'}`};
    ${({ marginSmall }) => marginSmall && `margin: ${marginSmall}`};
    ${({ display }) => display && `display: ${display}`};
    ${({ hasShadow }) => hasShadow && `box-shadow: 0 1px 2px ${hasShadow}`};
  }
`;

export const NewsWrapper = styled(StyledFlexDiv)`
  display: block;
`;

export const MainWrapper = styled(StyledFlexDiv)`
  height: 100%;
  background-color: ${props => props.bgColorContainer ? props.bgColorContainer : colors.color__04};
`;

export const MainContainer = styled(Container)`
  &&&& {
  background-color: ${colors.color__04}
  }
`;
