import React from 'react';
import PropTypes from 'prop-types';
import { ModalTitle } from './styles';

const ModalHeader = ({ title }) => (
  <div>
    <ModalTitle>{title}</ModalTitle>
  </div>
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
