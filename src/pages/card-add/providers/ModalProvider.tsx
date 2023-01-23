import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Modal } from "../../../components";

interface IModalProps {
  onClose?: () => void;
  onOpen?: () => void;
}

interface IModalContext {
  modal?: {
    children: ReactNode;
    props: IModalProps;
  };
  openModal: (component: ReactNode, props: IModalProps) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: {
    children: null,
    props: {},
  },
  openModal: () => null,
  closeModal: () => null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const [modalProps, setModalProps] = useState<IModalProps>({});
  const modal = useMemo(
    () => ({
      children: modalChildren,
      props: modalProps,
    }),
    [modalChildren, modalProps]
  );

  const openModal = useCallback((children: ReactNode, props: IModalProps) => {
    setModalChildren(children);
    setModalProps(props);
    props.onOpen?.();
  }, []);

  const closeModal = useCallback(() => {
    modalProps.onClose?.();
    setModalChildren(null);
    setModalProps({});
  }, [modalProps]);

  const contextValue: IModalContext = useMemo(() => {
    return {
      modal,
      openModal,
      closeModal,
    };
  }, [modal, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalChildren && <Modal onClose={closeModal}>{modalChildren}</Modal>}
    </ModalContext.Provider>
  );
}
