import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

const INIT_MODAL_CONTEXT: IModalContext = {
  isOpen: false,
  handleOpen: () => {},
};

export const ModalContext = createContext(INIT_MODAL_CONTEXT);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(INIT_MODAL_CONTEXT.isOpen);

  const handleOpen = (open: boolean) => {
    setOpen(open);
  };

  const modalContextValues: IModalContext = useMemo(
    () => ({
      isOpen,
      handleOpen,
    }),
    [isOpen],
  );
  return (
    <ModalContext.Provider value={modalContextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
