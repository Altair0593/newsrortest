import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { StyledFlexDiv, NewsWrapper } from 'components/Content/styled';

const NewsBlock = ({ news }) => {
  const themeNews = useContext(ThemeContext).newsPage;

  return (
    <>
      {news.map(el =>
        <NewsWrapper
          key={el.url}
          marginSmall='30px auto'
          display='block'
          padding='20px 10px'
          hasShadow={themeNews.boxShadow}
        >
          <Item.Group>
            <Item>
              { el.urlToImage
                ? <Item.Image size='small' src={el.urlToImage} />
                : <Item.Image size='small' src='/images/news-default-image.png' />
              }
              <Item.Content>
                <Item.Header>{el.title}</Item.Header>
                <Item.Meta>{el.description}</Item.Meta>
                <StyledFlexDiv justifyContent='space-between'>
                  <StyledFlexDiv>
                    <Item.Extra as='a'>
                      <span>{el.source.name}</span>
                    </Item.Extra>
                  </StyledFlexDiv>
                  <StyledFlexDiv fontWeight='bold'>
                    <Item.Extra>
                      <span>{el.publishedAt}</span>
                    </Item.Extra>
                  </StyledFlexDiv>
                </StyledFlexDiv>
              </Item.Content>
            </Item>
          </Item.Group>
        </NewsWrapper>
      )}
    </>);
}
  ;

NewsBlock.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsBlock;
