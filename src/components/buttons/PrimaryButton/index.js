import styled from 'styled-components';

export default styled.button`
  background-color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  height: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  outline: 0;
  min-width: 85px;

  &:hover {
    background-color: var(--darkBlue);
  }

  &:active {
    background-color: var(--darkerBlue);
  }

  & i {
    padding-right: 8px;
  }
`;
