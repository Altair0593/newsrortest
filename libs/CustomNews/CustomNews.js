import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Item } from 'semantic-ui-react';
import { StyledFlexDiv, NewsWrapper, NewsItemStyled } from 'components/Content/styled';
import { useIntl } from 'react-intl';

const CustomNews = () => {
  const themeNews = useContext(ThemeContext).newsPage;
  const intl = useIntl();

  return (
    <>
      <NewsWrapper
        marginSmall='30px 10px'
        display='block'
        padding='20px 10px'
        hasShadow={themeNews.boxShadow}
        hasBackground
      >
        <Item.Group>
          <Item>
            <Item.Image size='small' src='/images/news-default-image.png' />
            <Item.Content>
              <NewsItemStyled as='a'
                fontColor={themeNews.headerNewsColor}
                fontSize='20px'
              >
                <span>{intl.formatMessage({ id: 'customNewsError' })}</span>
              </NewsItemStyled>
              <Item.Meta>Sorry we dont have any news</Item.Meta>
              <StyledFlexDiv justifyContent='space-between' padding='20px 0 0 0'>
                <StyledFlexDiv>
                  <NewsItemStyled as='a'
                    fontColor={themeNews.linkColor}
                  >
                    <span>{intl.formatMessage({ id: 'customNewsError' })}</span>
                  </NewsItemStyled>
                </StyledFlexDiv>
                <StyledFlexDiv>
                  <Item.Extra>
                    <span>{intl.formatMessage({ id: 'customNewsError' })}</span>
                  </Item.Extra>
                </StyledFlexDiv>

              </StyledFlexDiv>
            </Item.Content>
          </Item>
        </Item.Group>
      </NewsWrapper>
    </>);
};

export default CustomNews;
