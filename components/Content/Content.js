import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './components/Header';
import NewsBlock from './components/NewsBlock';
import Pagination from './components/Pagination';
import FilterBlock from './components/FilterBlock/FilterBlock';
import { CustomNotify } from 'libs/CustomNotify/CustomNotify';
import { MainWrapper, MainContainer } from './styled';

const Content = ({ resetStoreToDefault }) => {
  const themeNews = useContext(ThemeContext).newsPage;

  useEffect(() => {
    return () => resetStoreToDefault();
  }, []);

  return (
    <MainWrapper
      display='block'
      hasBgImages
      hasBgSize='120%'
      flexDirection='column'
      hasBgPosition='center'
      hasBgAttachment='fixed'
    >
      <MainContainer hasHeight='45px'>
        <Header />
      </MainContainer>
      <MainContainer hasBgColor={`rgba(${themeNews.containerBgColor})`}>
        <FilterBlock />
        <NewsBlock />
        <Pagination />
        <CustomNotify />
      </MainContainer>
    </MainWrapper>
  );
};

Content.propTypes = {
  resetStoreToDefault: PropTypes.func.isRequired,
};

export default Content;
