import { useState } from 'react';

const useHelpIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};
export default useHelpIcon;
