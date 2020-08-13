import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ToolWrapper, ToolTopWrapper, ToolTitle, RemoveButton, TagList,
} from './styles';
import ModalConfirm from '../../../ModalConfirm';

const Tool = ({ tool, onClickRemove }) => {
  const [isRemoveConfirmShown, setRemoveConfirmShown] = useState(false);

  const removeAndClose = (idTool) => {
    onClickRemove(idTool);
    setRemoveConfirmShown(false);
  };

  return (
    <ToolWrapper>
      <ToolTopWrapper>
        {tool.link ? <ToolTitle href={tool.link} target="_blank" rel="noopener noreferrer">{tool.title}</ToolTitle>
          : <ToolTitle as="span">{tool.title}</ToolTitle>}
        <RemoveButton onClick={() => setRemoveConfirmShown(true)}>
          <i className="fa fa-times" aria-hidden="true" />
          remove
        </RemoveButton>
      </ToolTopWrapper>
      <p>
        {tool.description}
      </p>
      {tool.tags && (
        <TagList>
          { tool.tags.map((tag) => (
            <li key={`${tool.id}_${tag}`}>
              #
              {tag}
            </li>
          )) }
        </TagList>
      )}

      <ModalConfirm
        title="Remove tool"
        buttonConfirmText="Yes, remove"
        onConfirm={() => removeAndClose(tool.id)}
        onCancel={() => setRemoveConfirmShown(false)}
        isShown={isRemoveConfirmShown}
      >
        Are you sure you want to remove
        {' '}
        {tool.title}
        ?
      </ModalConfirm>
    </ToolWrapper>
  );
};

Tool.defaultProps = {
  tool: {
    link: '',
    tags: [],
  },
};

Tool.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  onClickRemove: PropTypes.func.isRequired,
};

export default Tool;
