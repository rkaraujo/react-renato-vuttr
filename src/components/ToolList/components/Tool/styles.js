import styled from 'styled-components';

export const ToolWrapper = styled.div`
  border: 1px solid var(--mostDarkestWhite);
  border-radius: 5px;
  padding: 15px;
  margin-top: 20px;
`;

export const ToolTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ToolTitle = styled.a`
  color: var(--primary);
  font-size: 30px;
  outline: 0;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--primary);
  padding: 0;

  &:active,
  &:hover {
    text-decoration: underline;
  }

  & i {
    color: var(--red);
    padding-right: 5px;
  }
`;

export const TagList = styled.ul`
  list-style-type: none;
  padding: 0;

  & li {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    padding-right: 15px;
  }
`;
