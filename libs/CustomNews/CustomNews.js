import { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Item } from 'semantic-ui-react';
import { ThemeContext } from 'styled-components';
import { StyledFlexDiv, NewsWrapper, NewsItemStyled } from 'components/Content/styled';

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
              <Item.Meta>{intl.formatMessage({ id: 'customNewsError' })}</Item.Meta>
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
