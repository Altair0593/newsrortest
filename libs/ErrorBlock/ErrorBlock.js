import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { NewsWrapper } from 'components/Content/styled';
import { StyledItemMeta } from 'styled';

const ErrorBlock = ({ errorMessage, hasShadow }) => (
  <>
    <NewsWrapper
      marginSmall='100px 160px'
      display='block'
      padding='20px 10px'
      hasShadow={hasShadow}
      hasBackground
      fontSize='40px'
      textAlign='center'
    >
      <Item.Group>
        <Item>
          <Item.Content>
            <StyledItemMeta
              fontSize='20px'
              isTextAlign='center'
            >
              {errorMessage}
            </StyledItemMeta>
          </Item.Content>
        </Item>
      </Item.Group>
    </NewsWrapper>
  </>);

ErrorBlock.propTypes = {
  hasShadow: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorBlock;
