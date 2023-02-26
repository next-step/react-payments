import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

export interface IModalContext {
  modalState: boolean;
  showModal: (state: boolean) => void;
}

const initialContext: IModalContext = {
  modalState: false,
  showModal: () => null,
};

export const ModalContext = createContext(initialContext);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState(false);

  const showModal = useCallback((state = true) => {
    setModalState(state);
  }, []);

  const contextValue = useMemo(() => ({
    modalState,
    showModal,
  }), [modalState]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}