import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const App = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
`;

interface DefaultLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  pageTitle,
  children,
}) => {
  return (
    <Root>
      <App>
        <header>
          <PageTitle>{pageTitle}</PageTitle>
        </header>
        {children}
      </App>
    </Root>
  );
};

export default DefaultLayout;
