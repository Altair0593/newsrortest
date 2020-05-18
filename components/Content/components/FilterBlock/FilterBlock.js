import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import DatePicker from './DatePicker';
import LanguagePicker from './LanguagePicker';
import { StyledFlexDiv, MainWrapper } from 'components/Content/styled';

const FilterBlock = () => {
  const themeNews = useContext(ThemeContext).newsPage;

  return (
    <>
      <MainWrapper
        bgColorContainer={themeNews.filterBlockBg}
        flexDirection='column'
      >
        <StyledFlexDiv>
          <DatePicker/>
        </StyledFlexDiv>
        <LanguagePicker/>
      </MainWrapper>
    </>
  );
};

export default React.memo(FilterBlock);
