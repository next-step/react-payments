import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return { isOpenModal, setIsOpenModal };
};
export default useModal;
