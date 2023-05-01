import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";

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

const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
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
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  pageTitle,
  children,
  showBackButton = false,
  onBackButtonClick,
}) => {
  return (
    <Root>
      <App>
        <Header>
          {showBackButton && onBackButtonClick && (
            <BackButton handleGoBack={onBackButtonClick} />
          )}
          <PageTitle>{pageTitle}</PageTitle>
        </Header>
        {children}
      </App>
    </Root>
  );
};

export default DefaultLayout;
