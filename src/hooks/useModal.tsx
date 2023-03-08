import { useState } from 'react';

const useModal = (isOpen) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  return { isOpenModal, setIsOpenModal };
};
export default useModal;
