import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Image, Button } from 'semantic-ui-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { MainWrapper, MainContainer, ContainerWithBrRadius } from '../Content/styled';
import { Title } from 'styled';
import CategoryItem from './components/CategoryItem';

const Category = ({ topics, putCategoryInStore }) => {
  const themeCategory = useContext(ThemeContext).categoryPage;
  const intl = useIntl();
  const router = useRouter();

  const changeCategory = event => {
    putCategoryInStore(event.target.id);
    router.push('/news');
    event.stopPropagation();
  };

  return (
    <MainWrapper
      display='block'
      hasBgImages
      height='100vh'
    >
      <MainContainer>
        <ContainerWithBrRadius
          padding='10px 0'
          hasBrRadius='70px 0 0 0'
          justifyContent='space-around'
          bgColorContainer={themeCategory.headerBgColor}
        >
          <Image size='tiny' src='images/logo.svg'/>
          <Title
            hasFontSize='30px'
            hasTextTransform='uppercase'
            hasColor={themeCategory.textColor}
          >
            <FormattedMessage
              id='chooseCategory'
              defaultMessage={intl.formatMessage({ id: 'chooseCategory' })}
            />
          </Title>
          <Button
            color='brown'
            content={intl.formatMessage({ id: 'addNewCategory' })}
          />
        </ContainerWithBrRadius>
        <MainWrapper
          hasFlexWrap
          hasMinHeight='700px'
          bgColorContainer={`rgba(${themeCategory.containerBgColor})`}
        >
          {topics.length ? topics.map(topic =>
            <CategoryItem
              name={topic.name}
              key={topic.imgSrc}
              mainWrapWidth='20%'
              brRadius='70px 0 0 0'
              marginSmall='10px 10px'
              imageUrl={topic.imgSrc}
              category={topic.category}
              onClickCallback={changeCategory}
              titleColor={themeCategory.textColor}
              mainBgColor={themeCategory[topic.bgColor]}
              titleBgColor={themeCategory[topic.titleBg]}
              titleFontColor={themeCategory[topic.bgColor]}
            />)
            : null}
        </MainWrapper>
      </MainContainer>
    </MainWrapper>
  );
};

Category.propTypes = {
  topics: PropTypes.array.isRequired,
  putCategoryInStore: PropTypes.func.isRequired,
};

export default Category;
