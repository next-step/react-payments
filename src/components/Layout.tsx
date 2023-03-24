import styled from "styled-components";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import ModalContainer from "./ModalContainer";

function Layout({ children }: ComponentProps) {
  return (
    <Root>
      <Wrapper>{children}</Wrapper>
      <ModalContainer>
        <Modal></Modal>
      </ModalContainer>
      {/* <Keyboard></Keyboard> */}
    </Root>
  );
}

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

const Root = styled.div`
  background-color: #fff;
  height: 100%;
  position: relative;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 16px 24px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
