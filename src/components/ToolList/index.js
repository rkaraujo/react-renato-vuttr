import React from 'react';
import PropTypes from 'prop-types';
import { ToolListWrapper } from './styles';
import Tool from './components/Tool';

const ToolList = ({ tools, onClickRemove }) => (
  <ToolListWrapper>
    {tools.length === 0 && <div>No results</div>}

    {tools.length > 0 && (
      tools.map((tool) => <Tool key={tool.id} tool={tool} onClickRemove={onClickRemove} />)
    )}
  </ToolListWrapper>
);

ToolList.defaultProps = {
  tools: [],
};

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  })),
  onClickRemove: PropTypes.func.isRequired,
};

export default ToolList;
