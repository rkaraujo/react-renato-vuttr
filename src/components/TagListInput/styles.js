import styled from 'styled-components';

export const TagInputWrapper = styled.div`
  background-color: var(--darkerWhite);
  border: 1px solid var(--darkestWhite);
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-bottom: 20px;
  outline: 0;
  padding: 5px 10px 10px 10px;
  min-height: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & input {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    flex: 1;
    font-size: 18px;
    height: 35px;
    margin: 5px 0 0 0;
    outline: none;
    padding: 0 6px;
  }
`;

export const TagWrapper = styled.div`
    background: var(--white);
    border: 1px solid var(--darkestWhite);
    border-radius: 5px;
    cursor: default;
    display: inline-block;
    font-size: 18px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 5px 10px;

    & span {
      color: var(--lightestInk);
      cursor: pointer;
      font-weight: bold;
      padding-left: 10px;
    }
`;
