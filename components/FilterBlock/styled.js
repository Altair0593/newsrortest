import styled from 'styled-components';

const elContainerWidthDefault = '100%';
const elContainerBlockWidthDefault = '20%';
const elContainerMarginDefault = '0';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 1px 2px #ccc;
`;

export const ElementContainer = styled.div`
  width: ${props => props.elContainerWidth ? props.elContainerWidth : elContainerWidthDefault};
  margin: ${props => props.elContainerMargin ? props.elContainerMargin : elContainerMarginDefault};
`;

export const ContainerBlock = styled.div`
  max-width: 750px;
  display: flex;
  justify-content: space-around;
`;

export const ElementContainerBlock = styled.div`
  width: ${props => props.elContainerBlockWidth ? props.elContainerBlockWidth : elContainerWidthDefault};
  height: 100%;
`;

export const defaultStyles = {
  elContainerWidthDefault,
  elContainerMarginDefault,
  elContainerBlockWidthDefault,
};
