import styled, { css } from 'styled-components';
import { Button, Image, Item } from 'semantic-ui-react';

export const fontStyles = css`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ fontColor }) => fontColor && `color: ${fontColor}`};
`;

export const Title = styled.h2`
  ${({ hasColor }) => hasColor && `color: ${hasColor}`};
  ${({ hasFontSize }) => hasFontSize && `font-size: ${hasFontSize}`};
  ${({ hasTextTransform }) => hasTextTransform && `text-transform: ${hasTextTransform}`}
`;

export const ButtonStyled = styled(Button)`
  &&&& {
    ${fontStyles}
    ${({ hasBgColor }) => hasBgColor && `background-color: ${hasBgColor}`};
    :hover {
      ${({ hasBgColorHover }) => hasBgColorHover && `background-color: ${hasBgColorHover}`};
    }
  }
`;

export const StyledImage = styled(Image)`
  &&&& {
    cursor: pointer;
    transition: all .2s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  };
`;

export const StyledItemMeta = styled(Item.Meta)`
  &&&& {
    ${fontStyles};
    ${({ isTextAlign }) => isTextAlign && `text-align: ${isTextAlign}`};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;  
    user-select: none;
    min-height: 35px;
  };
`;
