import Modal from '@/components/common/modal/Modal';
import { PropsWithChildren, createContext, useState } from 'react';

interface ModalType {
  toggle: () => void;
}

const initialContext: ModalType = {
  toggle: () => null,
};

export const ModalContext = createContext(initialContext);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ toggle }}>
      {children}
      {isOpen ? <Modal /> : null}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
