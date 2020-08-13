import React from 'react';
import PropTypes from 'prop-types';
import { MessageWrapper, CloseButton } from './styles';

const Message = ({ text, onClose }) => (
  <MessageWrapper>
    <p>{text}</p>
    <CloseButton onClick={onClose} type="button" aria-label="Close">
      <i className="fa fa-times" aria-hidden="true" />
    </CloseButton>
  </MessageWrapper>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Message;
