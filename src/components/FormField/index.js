import React from 'react';
import PropTypes from 'prop-types';
import {
  Label, FormFieldWrapper, Input, ErrorMessage, RequiredIcon,
} from './styles';

const FormField = ({
  label, name, type, onChange, value, errorMessage, isRequired,
}) => {
  const tag = type === 'textarea' ? 'textarea' : 'input';

  let className = '';
  if (type === 'textarea') {
    className += ' input-textarea';
  }
  if (errorMessage) {
    className += ' input-error';
  }

  return (
    <FormFieldWrapper>
      <Label>
        {label}
        {isRequired ? <RequiredIcon className="fa fa-asterisk" aria-hidden="true" /> : null}
      </Label>

      <Input
        as={tag}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className={className}
      />

      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  errorMessage: '',
  isRequired: false,
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default FormField;
