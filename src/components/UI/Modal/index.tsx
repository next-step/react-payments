import { PropsWithChildren, useState } from 'react';
import ReactDOM from 'react-dom';

import { StyledBackDrop, StyledModal } from './style';

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

type Props = {
  onClose: () => void;
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
