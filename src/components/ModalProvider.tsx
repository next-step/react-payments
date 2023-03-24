import { createContext, Dispatch, SetStateAction, useState } from "react";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ContextProps | null>(null);

function ModalProvider({ children }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
