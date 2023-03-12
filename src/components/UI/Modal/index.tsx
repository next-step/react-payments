import { PropsWithChildren, useState } from 'react';
import ReactDOM from 'react-dom';

import { StyledBackDrop, StyledModal } from './style';

type Props = {
  onClose: () => void;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

const Backdrop = ({ onClose }: Props) => {
  return <StyledBackDrop onClick={onClose}></StyledBackDrop>;
};

const ModalOverlay = ({ children }: PropsWithChildren) => {
  return <StyledModal>{children}</StyledModal>;
};

const portalElement = document.getElementById('overlay') as HTMLElement;

const Modal = ({ children, onClose }: PropsWithChildren<Props>) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
