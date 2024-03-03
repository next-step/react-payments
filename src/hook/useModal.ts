import { useState } from 'react';

export const useModal = (initialOpenState?: boolean) => {
  const [isOpen, setIsOpen] = useState(Boolean(initialOpenState));

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpen, handleClose };
};
