import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Dialog = styled.div`
  background-color: white;
  border: 1px solid var(--mostDarkestWhite);
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;

  & h2 {
    font-size: 26px;
    margin-top: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--lightInk);
  margin-left: auto;
  padding: 0;
`;
