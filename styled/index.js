import styled from 'styled-components';

export const Title = styled.h2`
  ${({ hasColor }) => hasColor && `color: ${hasColor}`};
  ${({ hasFontSize }) => hasFontSize && `font-size: ${hasFontSize}`};
  ${({ hasTextTransform }) => hasTextTransform && `text-transform: ${hasTextTransform}`}
`;
