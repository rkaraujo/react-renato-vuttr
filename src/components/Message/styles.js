import styled from 'styled-components';

export const MessageWrapper = styled.div`
  background-color: var(--green);
  border-radius: 5px;
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  min-height: 50px;
  padding: 20px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & p {
    padding: 0;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  padding: 0;
`;
