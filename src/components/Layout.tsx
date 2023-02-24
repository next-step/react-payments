import styled from "styled-components";
import Header from "./Header";
import Modal from "./Modal";
import ModalContainer from "./ModalContainer";

function Layout({ children }: ComponentProps) {
  return (
    <Root>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
      <ModalContainer>
        <Modal></Modal>
      </ModalContainer>
    </Root>
  );
}

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

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
