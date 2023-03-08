/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { useContext } from 'react';

type ModalContextType = {
  isOpen: boolean;
  show: () => void;
  close: () => void;
};
export const useModal = () => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error('Modal is undefined');
  }
  return value;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,

  show: function () {},
  close: function () {},
});

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const context = {
    isOpen,
    show,
    close,
  };
  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
