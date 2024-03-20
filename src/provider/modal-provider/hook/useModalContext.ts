import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';

const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('모달 컨텍스트 입니다!');
  }

  return modalContext;
};

export default useModalContext;
