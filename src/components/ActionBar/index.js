import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionBarWrapper, SearchBarWrapper, InputSearch,
} from './styles';
import InputSearchTagsOnly from './components/InputSearchTagsOnly';
import PrimaryButton from '../buttons/PrimaryButton';

const ActionBar = ({
  search, onChangeSearch, isSearchTagsOnly, onChangeSearchTagsOnly, onSubmitSearch, onClickAdd,
}) => (
  <ActionBarWrapper>
    <SearchBarWrapper>
      <form onSubmit={onSubmitSearch}>
        <InputSearch type="text" name="search" placeholder="search" value={search} onChange={onChangeSearch} />
        <InputSearchTagsOnly onChange={onChangeSearchTagsOnly} checked={isSearchTagsOnly} />
      </form>
    </SearchBarWrapper>
    <PrimaryButton type="button" onClick={onClickAdd}>
      <i className="fa fa-plus" aria-hidden="true" />
      {' '}
      Add
    </PrimaryButton>
  </ActionBarWrapper>
);

ActionBar.propTypes = {
  search: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  isSearchTagsOnly: PropTypes.bool.isRequired,
  onChangeSearchTagsOnly: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
};

export default ActionBar;
