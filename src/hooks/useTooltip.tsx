import { useState } from 'react';

const useToolTip = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};
export default useToolTip;
