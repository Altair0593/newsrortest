import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import { Title } from 'styled';
import { StyledFlexDiv, ContainerWithBrRadius, CategoryCardWrapper } from 'components/Content/styled';

const CategoryItem = ({
 name,
 imageUrl,
 category,
 brRadius,
 titleColor,
 mainBgColor,
 marginSmall,
 titleBgColor,
 mainWrapWidth,
 onClickCallback,
 }) =>
  <CategoryCardWrapper
    id={category}
    flexDirection='column'
    hasWidth={mainWrapWidth}
    onClick={onClickCallback}
    marginSmall={marginSmall}
    bgColorContainer={mainBgColor}
  >
    <StyledFlexDiv padding='15px 0'
     id={category}
    >
      <Image
        size='small'
        src={imageUrl}
        id={category}
      />
    </StyledFlexDiv>
    <ContainerWithBrRadius
      width='100%'
      id={category}
      padding='20px 0'
      hasBrRadius={brRadius}
      hasBgColor={titleBgColor}
    >
      <Title
        id={category}
        children={name}
        hasFontSize='20px'
        hasColor={titleColor}
        hasTextTransform='uppercase'
      />
    </ContainerWithBrRadius>
  </CategoryCardWrapper>
;

CategoryItem.propTypes = {
  brRadius: PropTypes.string,
  titleColor: PropTypes.string,
  mainBgColor: PropTypes.string,
  marginSmall: PropTypes.string,
  titleBgColor: PropTypes.string,
  onClickCallback: PropTypes.func,
  mainWrapWidth: PropTypes.string,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
  
export default React.memo(CategoryItem);
