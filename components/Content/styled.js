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
export const fontStyles = css`
${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
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
    ${fontStyles}
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
  ${({ hasHeight }) => hasHeight && `height: ${hasHeight}`};
  ${({ hasWidth }) => hasWidth && `width: ${hasWidth}`};
  background-color: ${props => props.bgColorContainer ? props.bgColorContainer : colors.color__04};
  ${({ hasMinHeight }) => hasMinHeight && `min-height: ${hasMinHeight}`};
  ${({ hasBgImages }) => hasBgImages && `background-image: url(images/mainBg.jpg)`};
  ${({ hasFlexWrap }) => hasFlexWrap && `flex-wrap: wrap`};
  background-size: 120%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const MainContainer = styled(Container)`
  &&&& {
  ${({ hasBgColor }) => hasBgColor && `background-color: ${colors.color__04}`}
  }
`;

export const ContainerWithBrRadius = styled(MainWrapper)`
  ${({ hasBrRadius }) => hasBrRadius && `border-radius: ${hasBrRadius}`};
  ${({ hasBgColor }) => hasBgColor && `background-color: ${hasBgColor}`};
`;

export const CategoryCardWrapper = styled(MainWrapper)`
  cursor: pointer;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.1)
  }
`;
