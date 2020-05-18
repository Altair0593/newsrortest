import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import Header from './components/Header';
import NewsBlock from './components/NewsBlock';
import Pagination from './components/Pagination';
import FilterBlock from './components/FilterBlock/FilterBlock';
import { CustomNotify } from 'libs/CustomNotify/CustomNotify';
import { MainWrapper, MainContainer } from './styled';
import { resetStoreToDefault } from 'redux/actions/actions';

const Content = () => {
  const themeNews = useContext(ThemeContext).newsPage;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetStoreToDefault());
  });

  return (
    <MainWrapper
      display='block'
      hasBgImages
      height='100vh'
      hasBgSize='120%'
      flexDirection='column'
      hasBgPosition='center'
      hasBgAttachment='fixed'
    >
      <MainContainer hasBgColor={`rgba(${themeNews.containerBgColor})`}>
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
