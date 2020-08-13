import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import FormField from '../FormField';
import { AddToolButton, AddToolButtonWrapper, StyledModal } from './styles';
import TagListInput from '../TagListInput';
import toolsRepository from '../../repositories/toolsRepository';

const ModalAddNewTool = ({ isShown, onClose }) => {
  const validURL = (str) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
      + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
      + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
      + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (values.link && !validURL(values.link)) {
      errors.link = 'Invalid URL';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      link: '',
      description: '',
      tags: [],
    },
    validateOnChange: false,
    validate,
    onSubmit: (values) => {
      toolsRepository.save(values)
        .then((savedTool) => {
          formik.resetForm();
          onClose(savedTool);
        });
    },
  });

  const onFormKeyDown = (keyEvent) => {
    // avoid enter submit
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const onCloseModal = () => {
    formik.resetForm();
    onClose();
  };

  const setTags = (tags) => {
    formik.setFieldValue('tags', tags);
  };

  return (
    <StyledModal isShown={isShown} onClose={onCloseModal}>
      <h2>Add new tool</h2>

      <form onSubmit={formik.handleSubmit} onKeyDown={onFormKeyDown}>
        <FormField
          label="Tool Name"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          isRequired
          errorMessage={formik.errors.title}
        />

        <FormField
          label="Tool Link"
          name="link"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.link}
          errorMessage={formik.errors.link}
        />

        <FormField
          label="Tool Description"
          name="description"
          type="textarea"
          onChange={formik.handleChange}
          value={formik.values.description}
          isRequired
          errorMessage={formik.errors.description}
        />

        <TagListInput
          label="Tags"
          name="tags"
          values={formik.values.tags}
          setValues={setTags}
        />

        <AddToolButtonWrapper>
          <AddToolButton type="submit">Add tool</AddToolButton>
        </AddToolButtonWrapper>
      </form>
    </StyledModal>
  );
};

ModalAddNewTool.defaultProps = {
  isShown: false,
  onClose: null,
};

ModalAddNewTool.propTypes = {
  isShown: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalAddNewTool;
