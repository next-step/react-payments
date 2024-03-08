import { useState } from 'react';

export const useModal = (initialOpenState?: boolean) => {
  const [isOpen, setIsOpen] = useState(Boolean(initialOpenState));

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};
