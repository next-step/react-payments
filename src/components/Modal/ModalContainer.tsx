import ModalPortal from './ModalPortal';
import Modal from './Modal';
import { useModalContext } from '@/context/ModalContext';

function ModalContainer() {
  const { open, closeModal, modalType } = useModalContext();

  return open ? <ModalPortal>{<Modal onClose={closeModal} modalType={modalType} />}</ModalPortal> : null;
}

export default ModalContainer;
