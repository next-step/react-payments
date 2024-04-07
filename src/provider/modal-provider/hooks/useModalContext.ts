import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';

const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('해당 Context는 ModalProvider 하위에서만 사용해주세요!');
  }

  return modalContext;
};

export default useModalContext;
