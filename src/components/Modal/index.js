import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, Dialog, CloseButton } from './styles';

const Modal = ({
  children, isShown, onClose, className,
}) => {
  if (!isShown) {
    return null;
  }

  return (
    <ModalWrapper>
      <Dialog className={className}>
        <CloseButton onClick={onClose} type="button" aria-label="Close">
          <i className="fa fa-times" aria-hidden="true" />
        </CloseButton>

        {children}
      </Dialog>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  isShown: false,
  onClose: null,
  className: '',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isShown: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Modal;
