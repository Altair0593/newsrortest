import styled from 'styled-components';
import { Container, Item, Menu } from 'semantic-ui-react';
import colors from 'managers/themeManager/colorMatrix';
import * as mixins from './mixins';

export const StyledFlexDiv = styled.div`
  &&&& {
    ${mixins.flexStyles}
    ${mixins.sizesStyles}
    ${mixins.fontStyles}
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
  ${({ hasBgColor }) => hasBgColor && `background-color: ${hasBgColor}`};
  position: relative;
  ${({ hasHeight }) => hasHeight && `height: ${hasHeight}`};
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
    ${mixins.fontStyles};
    cursor: pointer;
    margin: 10px 0;
    :hover {
      color: ${colors.color__14};
    }
  }
`;

export const NewsItemStyled = styled(Item.Extra)`
  &&&& {
  ${mixins.fontStyles}
  ${mixins.hoverStyles}
  }
`;
