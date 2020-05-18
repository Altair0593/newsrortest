import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledFlexDiv, MainWrapper, MainContainer, ContainerWithBrRadius } from '../Content/styled';
import { Title, StyledImage } from 'styled';
import CategoryItem from './components/CategoryItem';
import { checkInputValue } from 'utils/validation';
import ModalComponent from 'libs/ModalComponent/ModalComponent';

const Category = ({ 
  topics, 
  addNewTopic,
  headerModalText,
  headerModalButton,
  putCategoryInStore,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setNewTopicName] = useState('');

  const themeCategory = useContext(ThemeContext).categoryPage;
  const intl = useIntl();
  const router = useRouter();

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setNewTopicAndChangeModalState = () => {
    if (!topic.length) {
      return;
    }
    addNewTopic(topic);
    setNewTopicName('');
    setIsModalOpen(!isModalOpen);
  };

  const setNewTopicNameHelper = (e, name) => {
    setNewTopicName(name.value);
  };
  
  const changeCategory = event => {
    putCategoryInStore(event.target.id);
    router.push('/news');
  };

  return (
    <MainWrapper
      display='block'
      hasBgImages
      height='100vh'
      hasBgSize='120%'
      hasBgPosition='center'
      hasBgAttachment='fixed'
    >
      <MainContainer>
        <ContainerWithBrRadius
          hasBrRadius='70px 0 0 0'
          justifyContent='space-around'
          bgColorContainer={themeCategory.headerBgColor}
        >
          <Link href='/news'>
            <a>
              <StyledImage size='tiny' src='images/logo.svg'/>
            </a>
          </Link>
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
          <StyledFlexDiv padding='0'>
          {topics.length <= 9 ?
            <Button
              color='brown'
              onClick={changeModalState}
              content={intl.formatMessage({ id: 'addNewCategory' })}
            />
          : null}
          </StyledFlexDiv>
        </ContainerWithBrRadius>
        <MainWrapper
          hasFlexWrap
          hasMinHeight='700px'
          bgColorContainer={`rgba(${themeCategory.containerBgColor})`}
        >
          {topics.length ? topics.map(item =>
            <CategoryItem
              key={item.name}
              name={item.name}
              mainWrapWidth='20%'
              brRadius='70px 0 0 0'
              marginSmall='15px 10px'
              imageUrl={item.imgSrc}
              category={item.category}
              onClickCallback={changeCategory}
              titleColor={themeCategory.textColor}
              mainBgColor={themeCategory[item.bgColor]}
              titleBgColor={themeCategory[item.titleBg]}
              titleFontColor={themeCategory[item.bgColor]}
            />)
            : null}
        </MainWrapper>
      </MainContainer>
      <ModalComponent
        open={isModalOpen}
        onClose={changeModalState}
        onKeyDown={checkInputValue}
        onChange={setNewTopicNameHelper}
        titleId={headerModalText.headerModalTitle}
        backButtonId={headerModalButton.back}
        addButtonId={headerModalButton.add}
        inputId={headerModalText.headerModalPlaceholder}
        titleDefaultMessage='Please, choose topic that you want to add.'
        backButtonDefaultMessage='Back'
        addButtonDefaultMessage='Add'
        backButtonOnClick={changeModalState}
        addButtonOnClick={setNewTopicAndChangeModalState}
      />
    </MainWrapper>
  );
};

Category.propTypes = {
  topics: PropTypes.array.isRequired,
  addNewTopic: PropTypes.func.isRequired,
  headerModalText: PropTypes.object.isRequired,
  putCategoryInStore: PropTypes.func.isRequired,
  headerModalButton: PropTypes.object.isRequired,
};

export default Category;
