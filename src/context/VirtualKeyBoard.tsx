import { createContext, useState } from 'react';

type ModeType = 'cvc' | 'password' | '';
type VirtualKeyBoardContextType = {
  isOpen: boolean;
  mode: ModeType;
  show: () => void;
  hide: () => void;
  setUI: (type: ModeType) => void;
};

export const VirtualKeyBoardContext = createContext<VirtualKeyBoardContextType>({
  isOpen: false,
  mode: '',
  show: function () {},
  hide: function () {},
  setUI: function (type: ModeType) {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const VirtualKeyBoardContextProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ModeType>('');

  const show = () => {
    setIsOpen(true);
  };
  const hide = () => {
    setMode('');
    setIsOpen(false);
  };
  const setUI = (type: ModeType) => {
    setMode(type);
  };
  const context = {
    show,
    hide,
    isOpen,
    mode,
    setUI,
  };
  return <VirtualKeyBoardContext.Provider value={context}>{children}</VirtualKeyBoardContext.Provider>;
};
