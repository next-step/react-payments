import { createContext, useContext, useState, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

// type ModalType = 'CardCompanySelect';

const ModalContext = createContext<{
  open: boolean;
  modalType: string | null;
  openModal: () => void;
  closeModal: () => void;
} | null>(null);

const useModalContext = () => {
  const value = useContext(ModalContext);

  if (!value) {
    throw new Error('');
  }

  return value;
};

function ModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(!false);
  const [modalType, setModalType] = useState<string | null>(null);

  const dispatch = useMemo(
    () => ({
      openModal: (modalType = '') => {
        setOpen(true);
        setModalType(modalType);
      },
      closeModal: () => {
        setOpen(false);
        setModalType(null);
      },
    }),
    [],
  );

  return <ModalContext.Provider value={{ open, ...dispatch, modalType }}>{children}</ModalContext.Provider>;
}

export { ModalProvider, useModalContext };
