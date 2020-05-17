import React from 'react';
import { Modal, Button, Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { StyledFlexDiv } from 'components/Content/styled';
import { FormattedMessage, useIntl } from 'react-intl';

const ModalComponent = ({
  open,
  titleId,
  inputId,
  onClose,
  onChange,
  onKeyDown,
  addButtonId,
  backButtonId,
  addButtonOnClick,
  backButtonOnClick,
  titleDefaultMessage,
  addButtonDefaultMessage,
  backButtonDefaultMessage,
  }) => {
  const intl = useIntl();

  return (
    <Modal
      open={open}
      onClose={onClose}
      basic
      size='tiny'
    >
      <StyledFlexDiv justifyContent='center' marginSmall='0 0 25px 0'>
        <Modal.Content>
          <h3>
            <FormattedMessage
              id={titleId}
              defaultMessage={titleDefaultMessage}
            />
          </h3>
        </Modal.Content>
      </StyledFlexDiv>
      <Modal.Actions>
        <StyledFlexDiv>
          <Button
            attached='left'
            color='red'
            onClick={backButtonOnClick}
            inverted
          >
            <Icon
              name='remove'
            />
            <FormattedMessage
              id={backButtonId}
              defaultMessage={backButtonDefaultMessage}
            />
          </Button>
          <StyledFlexDiv marginSmall='10px'>
            <Input
              onKeyDown={onKeyDown}
              onChange={onChange}
              maxLength='20'
              placeholder={intl.formatMessage({ id: inputId })}
            />
          </StyledFlexDiv>
          <Button
            attached='right'
            color='green'
            onClick={addButtonOnClick}
            inverted
          >
            <Icon
              name='checkmark'
            />
            <FormattedMessage
              id={addButtonId}
              defaultMessage={addButtonDefaultMessage}
            />
          </Button>
        </StyledFlexDiv>
      </Modal.Actions>
    </Modal>
  );
};

ModalComponent.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  titleId: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  addButtonId: PropTypes.string.isRequired,
  backButtonId: PropTypes.string.isRequired,
  addButtonOnClick: PropTypes.func.isRequired,
  backButtonOnClick: PropTypes.func.isRequired,
  titleDefaultMessage: PropTypes.string.isRequired,
  addButtonDefaultMessage: PropTypes.string.isRequired,
  backButtonDefaultMessage: PropTypes.string.isRequired,
};

export default ModalComponent;
