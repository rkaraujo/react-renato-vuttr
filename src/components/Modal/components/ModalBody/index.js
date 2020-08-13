import React from 'react';
import PropTypes from 'prop-types';
import { ModalBodyWrapper } from './styles';

const ModalBody = ({ children }) => (
  <ModalBodyWrapper>
    { children }
  </ModalBodyWrapper>
);

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ModalBody;
