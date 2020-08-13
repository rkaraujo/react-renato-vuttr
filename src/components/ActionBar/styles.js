import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
`;

export const ActionBarWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputSearch = styled.input`
  background-color: var(--darkerWhite);
  border: 1px solid var(--darkestWhite);
  border-radius: 5px;
  outline: 0;
  padding: 10px 20px;
  height: 50px;
  margin-right: 10px;
  width: 400px;

  &:focus {
    background-color: var(--mostDarkestWhite);
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;
