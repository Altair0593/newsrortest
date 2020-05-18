import styled, { css } from 'styled-components';
import { Button, Image } from 'semantic-ui-react';

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
  };
`;
