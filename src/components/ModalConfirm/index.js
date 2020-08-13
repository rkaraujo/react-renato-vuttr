import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../Modal/components/ModalHeader';
import ModalBody from '../Modal/components/ModalBody';
import ModalFooter from '../Modal/components/ModalFooter';
import { StyledModal, ModalFooterWrapper } from './styles';
import DangerButton from '../buttons/DangerButton';
import SecondaryNeutralButton from '../buttons/SecondaryNeutralButton';

const ModalConfirm = ({
  title, children, onCancel, onConfirm, buttonConfirmText, isShown,
}) => (
  <StyledModal isShown={isShown} onClose={onCancel}>
    <ModalHeader title={title} />

    <ModalBody>
      <div>
        {children}
      </div>
    </ModalBody>

    <ModalFooter>
      <ModalFooterWrapper>
        <SecondaryNeutralButton onClick={onCancel}>Cancel</SecondaryNeutralButton>
        <DangerButton style={{ marginLeft: '30px' }} onClick={onConfirm}>{buttonConfirmText}</DangerButton>
      </ModalFooterWrapper>
    </ModalFooter>
  </StyledModal>
);

ModalConfirm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  buttonConfirmText: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default ModalConfirm;
