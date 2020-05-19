import { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Item } from 'semantic-ui-react';
import { ThemeContext } from 'styled-components';
import { NewsWrapper } from 'components/Content/styled';

const ErrorBlock = () => {
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
        fontSize='40px'
        textAlign='center'
      >
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Meta>{intl.formatMessage({ id: 'customNewsError' })}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </NewsWrapper>
    </>);
};

export default ErrorBlock;
