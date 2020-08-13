import styled from 'styled-components';

export default styled.button`
  background-color: var(--red);
  border: 1px solid var(--red);
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  height: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  outline: 0;
  min-width: 85px;

  &:hover {
    background-color: var(--darkRed);
  }

  &:active {
    background-color: var(--darkerRed);
  }

  & i {
    padding-right: 8px;
  }
`;
