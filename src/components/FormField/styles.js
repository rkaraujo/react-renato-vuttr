import styled from 'styled-components';
import './formField.css';

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: var(--darkerWhite);
  border: 1px solid var(--darkestWhite);
  border-radius: 5px;
  outline: 0;
  padding: 10px 20px;
  height: 50px;
  width: 100%;

  &:focus {
    background-color: var(--mostDarkestWhite);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--red);
  margin-top: 0;
  text-align: right;
  width: 100%;
`;

export const RequiredIcon = styled.i`
  color: var(--lightInk);
  font-size: 10px;
  padding-left: 5px;
`;
