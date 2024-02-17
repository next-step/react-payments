import { createContext, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

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
    <Wrapper>
      <KeyboardContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </KeyboardContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: justify;
`;

export default KeyboardProvider;
