import React, { useState } from 'react';
import { Icon, Menu, Modal, Button, Input } from 'semantic-ui-react';
import { checkInputValue } from './helpers/validation';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { StyledFlexDiv } from 'components/Content/styled';
import { StyledHeader } from './styled';
import { topicsMaximum } from 'constants/topicsAmountConst';

const Header = ({
  topics,
  headerModalButton,
  headerModalText,
  currentCategory,
  addNewTopic,
}) => {
  const [activeItem, setActiveItem] = useState({ activeItem: 'active' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setNewTopicName] = useState('');
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
        <Modal
          open={isModalOpen}
          onClose={changeModalState}
          basic
          size='tiny'
        >
          <StyledFlexDiv justifyContent='center' marginSmall='0 0 25px 0'>
            <Modal.Content>
              <h3>
                <FormattedMessage
                  id={headerModalText.headerModalTitle}
                  defaultMessage='Please, choose topic that you want to add.'
                />
              </h3>
            </Modal.Content>
          </StyledFlexDiv>
          <Modal.Actions>
            <StyledFlexDiv>
              <Button
                attached='left'
                color='red'
                onClick={changeModalState}
                inverted>
                <Icon
                  name='remove'
                />
                <FormattedMessage
                  id={headerModalButton.back}
                  defaultMessage='Back'
                />
              </Button>
              <StyledFlexDiv marginSmall='10px'>
                <Input
                  onKeyDown={checkInputValue}
                  onChange={setNewTopicNameHelper}
                  maxLength='20'
                  placeholder={intl.formatMessage({ id: headerModalText.headerModalPlaceholder })}
                />
              </StyledFlexDiv>
              <Button
                attached='right'
                color='green'
                onClick={setNewTopicAndChangeModalState}
                inverted>
                <Icon
                  name='checkmark'
                />
                <FormattedMessage
                  id={headerModalButton.add}
                  defaultMessage='Add'
                />
              </Button>
            </StyledFlexDiv>
          </Modal.Actions>
        </Modal>
      </StyledFlexDiv>
      <StyledFlexDiv justifyContent='flex-start' marginSmall='20px 50px'>
        <StyledHeader size='large'>{currentCategory}</StyledHeader>
      </StyledFlexDiv>
    </>
  );
};

Header.propTypes = {
  topics: PropTypes.array.isRequired,
  addNewTopic: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  headerModalText: PropTypes.object.isRequired,
  headerModalButton: PropTypes.object.isRequired,
};

export default Header;
