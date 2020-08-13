/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { TagWrapper, TagInputWrapper } from './styles';

const Tag = ({ children, onClickRemove }) => (
  <TagWrapper>
    {children}
    <span role="button" aria-label="remove" onClick={onClickRemove} tabIndex="0">x</span>
  </TagWrapper>
);

const Tags = ({ values, onClickRemove }) => {
  if (!values || values.length === 0) {
    return null;
  }

  return (
    <>
      { values.map((value) => <Tag key={value} onClickRemove={onClickRemove}>{value}</Tag>) }
    </>
  );
};

const TagInput = ({
  id, name, onKeyUp, onFocus, onBlur,
}) => (
  <input type="text" name={name} id={id} onKeyUp={onKeyUp} onFocus={onFocus} onBlur={onBlur} />
);

const TagListInput = ({
  label, name, values, setValues,
}) => {
  const onClickRemove = (event) => {
    // remove last character 'x' button
    const removedTag = event.target.parentElement.textContent.slice(0, -1);
    const remainingTags = values.filter((tag) => tag !== removedTag);
    setValues(remainingTags);
  };

  const onKeyUpAdd = (event) => {
    if ((event.charCode || event.keyCode) === 13) {
      const inputTag = event.target;
      const tag = inputTag.value.trim();
      if (!tag) {
        return;
      }

      inputTag.value = '';

      setValues([
        ...values,
        tag,
      ]);
    }
  };

  const onFocusTagListInput = () => {
    const tagListInput = document.querySelector(`#tag-list-input-${name}`);
    tagListInput.style.backgroundColor = 'var(--mostDarkestWhite)';
  };

  const onBlurTagListInput = () => {
    const tagListInput = document.querySelector(`#tag-list-input-${name}`);
    tagListInput.style.backgroundColor = 'var(--darkerWhite)';
  };

  return (
    <div onFocus={() => document.querySelector(`#${name}`).focus()}>
      <label htmlFor={name}>{label}</label>
      <TagInputWrapper id={`tag-list-input-${name}`}>
        <Tags values={values} onClickRemove={onClickRemove} />
        <TagInput
          type="text"
          name={name}
          id={name}
          onKeyUp={onKeyUpAdd}
          onFocus={onFocusTagListInput}
          onBlur={onBlurTagListInput}
        />
      </TagInputWrapper>
    </div>
  );
};

TagListInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default TagListInput;
