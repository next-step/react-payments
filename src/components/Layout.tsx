import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: ComponentProps) {
  return (
    <Root>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Root>
  );
}

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

export default Layout;
