import React, { useState } from 'react';
import { Icon, Menu, Modal, Button, Input } from 'semantic-ui-react';
import { checkInputValue } from './helpers/validation';
import { FormattedMessage, useIntl } from 'react-intl';
import { ModalWrapper } from './styled.js';
import PropTypes from 'prop-types';

const Header = ({ headerModalButton, headerModalText, topics }) => {
  const [activeItem, setState] = useState({ activeItem: 'active' });
  const [isModalState, setModalState] = useState(false);

  const intl = useIntl();

  const changeModalState = () => {
    setModalState(!isModalState);
  };

  const renderNewsButtons = () => {
    if (topics.length <= 10) {
      return (
        topics.map(item => {
          return (
            <Menu.Item
              key={item.name}
              name={item.name}
              active={activeItem === item.name}
              onClick={(e, { name }) => setState({ activeItem: name })}
            >
              {item.name}
            </Menu.Item>
          );
        })
      );
    } else {
      topics.length = 10;
      return renderNewsButtons();
    }
  };

  return (
    <div>
      <>
        <Menu attached='bottom'>

          {renderNewsButtons()}

          <Menu.Menu position='right'>
            <Menu.Item
              name='add-topic'
              active={activeItem === 'add-topic'}
              onClick={changeModalState}
            >
              <Icon name='add' />
              <FormattedMessage id={headerModalButton.addTopic} defaultMessage={'Topic'} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </>
      <Modal
        open={isModalState}
        onClose={changeModalState}
        basic
        size='tiny'
      >
        <Modal.Content>
          <h3>
            <FormattedMessage id={headerModalText.headerModalTitle} defaultMessage={'Back'} />
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <ModalWrapper>
            <Button attached='left' color='red' onClick={changeModalState} inverted>
              <Icon name='remove' /> <FormattedMessage id={headerModalButton.back} defaultMessage={'Back'} />
            </Button>
            <Input
              onKeyDown={(e) => {
                checkInputValue(e);
              }}
              maxLength='20'
              placeholder={intl.formatMessage({ id: headerModalText.headerModalPlaceholder })}
            />
            <Button attached='right' color='green'
              onClick={changeModalState}
              inverted>
              <Icon name='checkmark' /> <FormattedMessage id={headerModalButton.add} defaultMessage={'Add'} />
            </Button>
          </ModalWrapper>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

Header.propTypes = {
  topics: PropTypes.array,
  headerModalText: PropTypes.object,
  headerModalButton: PropTypes.object,
};

export default Header;
