import styled, { css } from 'styled-components';
import { Container, Item, Menu } from 'semantic-ui-react';
import colors from 'managers/themeManager/colorMatrix';

export const sizesStyles = css`
  ${({ margin = '0' }) => margin && `margin: ${margin}`};
  ${({ padding = '0' }) => padding && `padding: ${padding}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ minWidth }) => minWidth && `minWidth: ${minWidth}`};
`;
export const fontStyles = css`
${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
${({ fontColor }) => fontColor && `color: ${fontColor}`};
`;

export const hoverStyles = css`
 :hover {
  transform: scale(1.1);
  color: ${colors.color__26};
  border-bottom: 2px solid ${colors.color__26};
}
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
  ${({ hasBackground }) => hasBackground && `background-color: rgba(${colors.color__20})`};
`;

export const MainWrapper = styled(StyledFlexDiv)`
  ${({ hasHeight }) => hasHeight && `height: ${hasHeight}`};
  ${({ hasWidth }) => hasWidth && `width: ${hasWidth}`};
  background-color: ${props => props.bgColorContainer ? props.bgColorContainer : colors.color__04};
  ${({ hasMinHeight }) => hasMinHeight && `min-height: ${hasMinHeight}`};
  ${({ hasBgImages }) => hasBgImages && `background-image: url(images/mainBg.jpg)`};
  ${({ hasFlexWrap }) => hasFlexWrap && `flex-wrap: wrap`};
  ${({ hasBgSize }) => hasBgSize && `background-size: ${hasBgSize}`};
  ${({ hasBgAttachment }) => hasBgAttachment && `background-attachment: ${hasBgAttachment}`};
  ${({ hasBgPosition }) => hasBgPosition && `background-position: ${hasBgPosition}`};
  background-repeat: no-repeat;
`;

export const MainContainer = styled(Container)`
  &&&& {
  ${({ hasBgColor }) => hasBgColor && `background-color: ${hasBgColor}`}
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

export const MenuItemStyled = styled(Menu.Item)`
  &&&& {
    ${fontStyles}
    :hover {
      color: ${colors.color__14};
    }
  }
`;

export const NewsItemStyled = styled(Item.Extra)`
  &&&& {
  ${fontStyles}
  ${hoverStyles}
  }
`;
