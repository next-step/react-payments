import { createContext, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import useModalState from "../hooks/useModalState";
import Header from "./Header";
import Modal from "./Modal";

type ContextProps = {
  isModalOpen: boolean;
  toggleModal: () => void;
  cardId: String;
  setCardId: Dispatch<SetStateAction<string>>;
};

export const ModalContext = createContext<ContextProps>({
  isModalOpen: false,
  toggleModal: () => {},
  cardId: "",
  setCardId: () => {},
});

function Layout({ children }: ComponentProps) {
  const { toggleModal, isModalOpen, cardId, setCardId } = useModalState();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, toggleModal, cardId, setCardId }}
    >
      <Root>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        {isModalOpen ? <Modal /> : null}
      </Root>
    </ModalContext.Provider>
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
