import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Modal } from "../../../components";

interface IModalContext {
  modal: ReactNode;
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: null,
  openModal: () => null,
  closeModal: () => null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<ReactNode>(null);

  const openModal = useCallback((modal: ReactNode) => {
    if (modal) {
      setModal(modal);
    }
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  const contextValue = useMemo(() => {
    return { modal, openModal, closeModal };
  }, [modal, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modal && <Modal onClose={closeModal}>{modal}</Modal>}
    </ModalContext.Provider>
  );
}
