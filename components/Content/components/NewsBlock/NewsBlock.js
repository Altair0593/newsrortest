import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { StyledFlexDiv, NewsWrapper, NewsItemStyled } from 'components/Content/styled';
import ErrorBlock from 'libs/ErrorBlock/ErrorBlock';
import { StyledItemMeta } from 'styled';

const NewsBlock = ({ news }) => {
  const themeNews = useContext(ThemeContext).newsPage;

  return (
    <>
      {news.length
        ? news.map(el =>
          <NewsWrapper
            key={el.source.id}
            marginSmall='15px 10px'
            display='block'
            padding='20px 10px'
            hasShadow={themeNews.boxShadow}
            hasBackground
            data-at='at-newscard-card'
          >
            <Item.Group>
              <Item>
                {el.urlToImage
                  ? <Item.Image
                    size='small'
                    alt={el.title}
                    title={el.title}
                    src={el.urlToImage}
                    href={el.url}
                    data-at='at-newscard-image'
                  />
                  : <Item.Image
                    size='small'
                    alt={el.title}
                    title={el.title}
                    src='/images/news-default-image.png'
                    data-at='at-newscard-image-error'
                  />
                }
                <Item.Content>
                  <NewsItemStyled
                    as='a'
                    href={el.url}
                    fontColor={themeNews.headerNewsColor}
                    fontSize='20px'
                    data-at='at-newscard-title'
                  >
                    <span>{el.title}</span>
                  </NewsItemStyled>
                  <StyledItemMeta
                    data-at='at-newscard-description'
                  >
                    {el.description}
                  </StyledItemMeta>
                  <StyledFlexDiv
                    justifyContent='space-between'
                    padding='20px 0 0 0'
                  >
                    <StyledFlexDiv>
                      <NewsItemStyled
                        as='a'
                        fontColor={themeNews.linkColor}
                        href={el.sourceUrl}
                        data-at='at-newscard-source-link'
                      >
                        <span>{el.source.name}</span>
                      </NewsItemStyled>
                    </StyledFlexDiv>
                    <StyledFlexDiv>
                      <Item.Extra>
                        <span>{el.publishedAt}</span>
                      </Item.Extra>
                    </StyledFlexDiv>

                  </StyledFlexDiv>
                </Item.Content>
              </Item>
            </Item.Group>
          </NewsWrapper>
        )
        : <ErrorBlock/>}
    </>);
};

NewsBlock.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsBlock;
