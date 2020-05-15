import React, { useState } from 'react';
import { Icon, Menu, Modal, Button, Input } from 'semantic-ui-react';
import { checkInputValue } from './helpers/validation';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { StyledFlexDiv } from 'components/Content/styled';
import { StyledHeader } from './styled';

const Header = ({ topics, headerModalButton, headerModalText, currentCategory }) => {
  const [activeItem, setState] = useState({ activeItem: 'active' });
  const [isModalState, setModalState] = useState(false);
  const intl = useIntl();

  const changeModalState = () => {
    setModalState(!isModalState);
  };

  const changeActiveItem = (e, { name }) => {
    setState({ activeItem: name });
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
        </Menu>
        <Modal
          open={isModalState}
          onClose={changeModalState}
          basic
          size='tiny'
        >
          <Modal.Content>
            <h3>
              <FormattedMessage
                id={headerModalText.headerModalTitle}
                defaultMessage='Please, choose topic that you want to add.'
              />
            </h3>
          </Modal.Content>
          <Modal.Actions>
            <StyledFlexDiv>
              <Input
                onKeyDown={checkInputValue}
                maxLength='20'
                placeholder={intl.formatMessage({ id: headerModalText.headerModalPlaceholder })}
              />
              <Button
                attached='right'
                color='green'
                onClick={changeModalState}
                inverted>
                <Icon
                  name='checkmark'
                />
                <FormattedMessage
                  id={headerModalButton.add}
                  defaultMessage='Add'
                />
              </Button>
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
  headerModalText: PropTypes.object.isRequired,
  headerModalButton: PropTypes.object.isRequired,
};

export default Header;
