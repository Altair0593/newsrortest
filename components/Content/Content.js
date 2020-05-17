import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Header from './components/Header';
import NewsBlock from './components/NewsBlock';
import Pagination from './components/Pagination';
import FilterBlock from './components/FilterBlock/FilterBlock';
import { CustomNotify } from 'libs/CustomNotify/CustomNotify';
import { MainWrapper, MainContainer } from './styled';

const Content = () => {
  const themeNews = useContext(ThemeContext).newsPage;

  return (
    <MainWrapper
      flexDirection='column'
      bgColorContainer={themeNews.mainBgColor}
    >
      <MainContainer hasBgColor>
        <Header/>
        <FilterBlock/>
        <NewsBlock/>
        <Pagination/>
        <CustomNotify/>
      </MainContainer>
    </MainWrapper>
  );
};

export default Content;
