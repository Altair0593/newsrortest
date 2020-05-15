import React from 'react';
import DatePicker from './DatePicker';
import LanguagePicker from './LanguagePicker';
import { StyledFlexDiv } from 'components/Content/styled';

const FilterBlock = () => (
    <>
      <StyledFlexDiv>
        <DatePicker/>
      </StyledFlexDiv>
      <LanguagePicker/>
    </>);

export default React.memo(FilterBlock);
