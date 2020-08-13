import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid var(--mostDarkestWhite);
`;

export const HeaderTitleWrapper = styled.div`
  padding-left: 20%;
  padding-right: 20%;
`;

export const HeaderTitle = styled.div`
  color: var(--ink);
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeaderSubtitle = styled.div`
  color: var(--ink);
  font-size: 18px;
  line-height: 18px;
`;
