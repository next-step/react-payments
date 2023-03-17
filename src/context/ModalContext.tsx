import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from 'react';

export type ModalType = 'SELECT_COMPANY' | 'MANAGE_CARD' | 'MESSAGE_TOOLTIP';

interface ModalStateType {
  type: ModalType | null;
  isShow: boolean;
}

interface ModalContextType {
  modalState: ModalStateType;
  setModalState: Dispatch<ModalStateType>;
}
export const ModalStateContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ModalStateType>({
    type: null,
    isShow: false,
  });

  return (
    <ModalStateContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalStateContext.Provider>
  );
};

export const useModalState = (): ModalContextType => {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Cannot find ModalProvider');
  return state;
};
