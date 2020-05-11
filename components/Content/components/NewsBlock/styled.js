import styled from 'styled-components';
import { newsGrid } from '../../styled.js';

export const NewsItem = styled.div`
    ${newsGrid}
    box-shadow: 0 1px 2px #ccc;
    padding: 10px;
`;

export const ItemExtraWrapper = styled.div`
    display: flex;
    & .itemExtraRight {
        text-align: right;
    }
`;
