import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputSearchTagsOnly = ({ className, onChange, checked }) => (
  <label htmlFor="search-tags-only" className={className}>
    <input type="checkbox" name="search-tags-only" id="search-tags-only" onChange={onChange} checked={checked} />
    search in tags only
  </label>
);

const StyledInputSearchTagsOnly = styled(InputSearchTagsOnly)`
  font-size: 18px;
`;

InputSearchTagsOnly.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default StyledInputSearchTagsOnly;
