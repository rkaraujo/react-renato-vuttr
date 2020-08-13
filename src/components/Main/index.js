import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from './styles';

const Main = ({ children }) => (
  <MainWrapper>
    {children}
  </MainWrapper>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
