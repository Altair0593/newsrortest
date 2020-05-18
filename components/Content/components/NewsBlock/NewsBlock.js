import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { StyledFlexDiv, NewsWrapper, NewsItemStyled } from 'components/Content/styled';
import CustomNews from 'libs/CustomNews/CustomNews';

const NewsBlock = ({ news }) => {
  const themeNews = useContext(ThemeContext).newsPage;

  return (
    <>
      <Scrollbars autoHeight autoHeightMin={630} style={{ width: '100%' }} >
        {news.length ? news.map(el =>
          <NewsWrapper
            key={el.source.id}
            marginSmall='30px 10px'
            display='block'
            padding='20px 10px'
            hasShadow={themeNews.boxShadow}
            hasBackground
          >
            <Item.Group>
              <Item>
                {el.urlToImage
                  ? <Item.Image size='small' src={el.urlToImage} href={el.url} />
                  : <Item.Image size='small' src='/images/news-default-image.png' />
                }
                <Item.Content>
                  <NewsItemStyled as='a'
                    href={el.url}
                    fontColor={themeNews.headerNewsColor}
                    fontSize='20px'
                  >
                    <span>{el.title}</span>
                  </NewsItemStyled>
                  <Item.Meta>{el.description}</Item.Meta>
                  <StyledFlexDiv justifyContent='space-between' padding='20px 0 0 0'>
                    <StyledFlexDiv>
                      <NewsItemStyled as='a'
                        fontColor={themeNews.linkColor}
                        href={el.source.name}
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
        ) : <CustomNews />}
      </Scrollbars>
    </>);
};

NewsBlock.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsBlock;
