import { ModalType } from '@/types';
import { createContext, useContext, useState, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

// type ModalType = 'CardCompanySelect';

const ModalContext = createContext<{
  open: boolean;
  modalType: ModalType | null;
  openModal: (modalType: ModalType) => void;
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
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const dispatch = useMemo(
    () => ({
      openModal: (modalType: ModalType) => {
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
