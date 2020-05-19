import { css } from 'styled-components';
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
