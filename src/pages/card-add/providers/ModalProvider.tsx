import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface IModalContext {
  modal: ReactNode;
  setModal: (modal: ReactNode) => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: null,
  setModal: () => null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<ReactNode>(null);

  const contextValue = useMemo(() => {
    return { modal, setModal };
  }, [modal]);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modal && (
        <div className="modal-dimmed" onClick={closeModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            {modal}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
