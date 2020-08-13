import React from 'react';
import PropTypes from 'prop-types';
import PageDefaultWrapper from './styles';
import Header from '../Header';

const PageDefault = ({ children }) => (
  <PageDefaultWrapper>
    <Header />

    {children}
  </PageDefaultWrapper>
);

PageDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageDefault;
