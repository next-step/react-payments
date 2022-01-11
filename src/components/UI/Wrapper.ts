import styled, { css } from 'styled-components';

export const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

export const App = styled.div<{ flexColumnCenter?: boolean }>`
  height: 100%;
  padding: 16px 24px;

  ${({ flexColumnCenter }) =>
    flexColumnCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
