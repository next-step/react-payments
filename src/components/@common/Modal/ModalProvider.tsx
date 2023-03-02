import { createContext, PropsWithChildren } from 'react';
import useToggle from 'hooks/useToggle';

export const ModalContext = createContext({
  isOpened: false,
  open: () => {},
  close: () => {},
});
ModalContext.displayName = 'ModalContext';

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpened, open, close } = useToggle();

  return (
    <ModalContext.Provider value={{ isOpened, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
