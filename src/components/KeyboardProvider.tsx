import { createContext, Dispatch, SetStateAction, useState } from "react";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const KeyboardContext = createContext<ContextProps | null>(null);

function KeyboardProvider({ children }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <KeyboardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </KeyboardContext.Provider>
  );
}

export default KeyboardProvider;
