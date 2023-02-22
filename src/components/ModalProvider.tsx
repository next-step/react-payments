import { createContext, Dispatch, SetStateAction } from "react";
import useModalState from "../hooks/useModalState";
import Modal from "./Modal";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

type ContextProps = {
  isModalOpen: boolean;
  toggleModal: () => void;
  bankId: String;
  setBankId: Dispatch<SetStateAction<string>>;
};

export const ModalContext = createContext<ContextProps | null>({
  isModalOpen: false,
  toggleModal: () => {},
  bankId: "",
  setBankId: () => {},
});

function Layout({ children }: ComponentProps) {
  const { toggleModal, isModalOpen, bankId, setBankId } = useModalState();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, toggleModal, bankId, setBankId }}
    >
      {children}
      {isModalOpen ? <Modal /> : null}
    </ModalContext.Provider>
  );
}

export default Layout;
