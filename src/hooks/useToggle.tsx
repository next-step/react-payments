import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};
export default useToggle;
