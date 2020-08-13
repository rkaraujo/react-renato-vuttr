import styled from 'styled-components';

export default styled.button`
  background-color: var(--mostLightestBlue);
  border: 1px solid var(--mostLightestBlue);
  border-radius: 5px;
  color: var(--primary);
  cursor: pointer;
  height: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  outline: 0;
  min-width: 85px;

  &:hover {
    background-color: var(--lightestBlue);
  }

  &:active {
    background-color: var(--lighterBlue);
  }

  & i {
    padding-right: 8px;
  }
`;
