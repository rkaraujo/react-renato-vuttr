import styled from 'styled-components';
import Modal from '../Modal';

export const ModalFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledModal = styled(Modal)`
  width: 600px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
