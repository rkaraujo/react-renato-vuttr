import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import Modal from '../Modal';

export const AddToolButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const AddToolButton = styled(PrimaryButton)`
  font-size: 18px;
  margin-left: auto;
  width: 125px;
`;

export const StyledModal = styled(Modal)`
  width: 600px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
