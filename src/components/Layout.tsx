import styled from "styled-components";
import Modal from "./Modal";
import ModalContainer from "./ModalContainer";

function Layout({ children }: ComponentProps) {
  return (
    <Root>
      <Wrapper>{children}</Wrapper>
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
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
