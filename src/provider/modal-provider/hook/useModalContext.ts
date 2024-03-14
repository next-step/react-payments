import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';

const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    return null;
  }
  return modalContext;
};

export default useModalContext;
