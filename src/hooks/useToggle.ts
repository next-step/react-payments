import { useState } from 'react';

const useToggle = () => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    setIsOpened(true);
  };
  const close = () => {
    setIsOpened(false);
  };

  return {
    isOpened,
    //
    open,
    close,
  };
};

export default useToggle;
