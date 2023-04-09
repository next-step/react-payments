import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import { StyledBackDrop, StyledModal } from './style';

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
