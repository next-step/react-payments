import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface AppProps {
  flexColumnCenter?: boolean;
}

interface PageTitleProps {
  mb10?: boolean;
}

export const GlobalStyles = css`
  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  }

  input {
    font-size: 16px;
  }
`;

export const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #383838;

  ${({ mb10 }: PageTitleProps) => mb10 && `margin-bottom: 2.5rem;`}
`;

export const App = styled.div`
  height: 100%;
  padding: 16px 24px;

  ${({ flexColumnCenter }: AppProps) =>
    flexColumnCenter &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
