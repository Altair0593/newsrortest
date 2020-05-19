import {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Icon, Menu } from 'semantic-ui-react';
import Link from 'next/link';
import { ThemeContext } from "styled-components";
import { checkInputValue } from 'utils/validation';
import { HeaderWrapper } from './styled';
import { topicsMaximum } from 'constants/topicsAmountConst';
import ModalComponent from 'libs/ModalComponent/ModalComponent';
import { StyledImage } from 'styled';
import { MainWrapper } from 'components/Content/styled';

const Header = ({
  topics,
  headerModalButton,
  headerModalText,
  putCategoryInStore,
  addNewTopic,
  getDefaultNews,
  changeActivePage,
  currentCategory,
}) => {
  const [activeItem, setActiveItem] = useState({ activeItem: 'active' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setNewTopicName] = useState('');

  const themeNews = useContext(ThemeContext).newsPage;

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

  const changeActiveItem = (e, { name }) => {
    if (currentCategory === name) {
      return;
    }
    setActiveItem({ activeItem: name });
    putCategoryInStore(name);
    changeActivePage(1);
    getDefaultNews();
  };

  const setNewTopicNameHelper = (e, name) => {
    setNewTopicName(name.value);
  };

  return (
    <HeaderWrapper >
      <Menu>
        <MainWrapper
          marginSmall='0 10px'
        >
          <Link href='/'>
            <a>
              <StyledImage
                data-at='at-logo-news-page'
                size='mini'
                src='images/logo.svg'
              />
            </a>
          </Link>
        </MainWrapper>
        {topics.map(item =>
          <Menu.Item
            text
            key={item.name}
            name={item.name}
            active={activeItem === item.name}
            onClick={changeActiveItem}
            data-at={`${item.dataAt}-news`}
          >
            {item.name}
          </Menu.Item>
        )}
        {topics.length < topicsMaximum ?
          <Menu.Menu position='right'>
            <Menu.Item
              name='add-topic'
              active={activeItem === 'add-topic'}
              onClick={changeModalState}
              data-at='at-news-category-add-button'
            >
              <Icon
                name='add'
              />
              <FormattedMessage
                id={headerModalButton.addTopic}
                defaultMessage='Add Topic'
              />
            </Menu.Item>
          </Menu.Menu>
          : null }
      </Menu>
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
    </HeaderWrapper >
  );
};

Header.propTypes = {
  topics: PropTypes.array.isRequired,
  addNewTopic: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  putCategoryInStore: PropTypes.func.isRequired,
  headerModalText: PropTypes.object.isRequired,
  headerModalButton: PropTypes.object.isRequired,
};

export default Header;
