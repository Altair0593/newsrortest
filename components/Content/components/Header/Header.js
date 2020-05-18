import { useContext, useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { checkInputValue } from 'utils/validation';
import { FormattedMessage, useIntl } from 'react-intl';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledFlexDiv, MainWrapper } from 'components/Content/styled';
import { StyledHeader } from './styled';
import ModalComponent from 'libs/ModalComponent/ModalComponent';
import { topicsMaximum } from 'constants/topicsAmountConst';

const Header = ({
  topics,
  headerModalButton,
  headerModalText,
  currentCategory,
  putCategoryInStore,
  addNewTopic,
  getDefaultNews,
}) => {
  const [activeItem, setActiveItem] = useState({ activeItem: 'active' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setNewTopicName] = useState('');

  const themeNews = useContext(ThemeContext).newsPage;
  const intl = useIntl();

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
    setActiveItem({ activeItem: name });
    putCategoryInStore(name);
    getDefaultNews();
  };

  const setNewTopicNameHelper = (e, name) => {
    setNewTopicName(name.value);
  };

  return (
    <>
      <StyledFlexDiv>
        <Menu attached='bottom'>
          {topics.map(item =>
            <Menu.Item
              key={item.name}
              name={item.name}
              active={activeItem === item.name}
              onClick={changeActiveItem}
            >
              {item.name}
            </Menu.Item>
          )}
          { topics.length < topicsMaximum ?
            <Menu.Menu position='right'>
              <Menu.Item
                name='add-topic'
                active={activeItem === 'add-topic'}
                onClick={changeModalState}
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
      </StyledFlexDiv>
      <MainWrapper
        justifyContent='flex-start'
        padding='20px 50px'
        bgColorContainer={themeNews.filterBlockBg}
      >
        <StyledHeader size='large'>
          {intl.formatMessage({ id: 'news' }, { currentCategory })}
        </StyledHeader>
      </MainWrapper>
    </>
  );
};

Header.propTypes = {
  topics: PropTypes.array.isRequired,
  addNewTopic: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  getDefaultNews: PropTypes.func.isRequired,
  putCategoryInStore: PropTypes.func.isRequired,
  headerModalText: PropTypes.object.isRequired,
  headerModalButton: PropTypes.object.isRequired,
};

export default Header;
