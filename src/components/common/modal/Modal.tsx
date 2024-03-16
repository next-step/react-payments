import {type PropsWithChildren} from 'react';

type ModalProps = {
  onToggle: () => void;
  isOpen: boolean;
} & PropsWithChildren;
const Modal = ({onToggle, isOpen, children}: ModalProps) => isOpen ? (
  <div className='modal-dimmed' onClick={onToggle}>
    <div
      className='modal'
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  </div>
) : null;

export default Modal;
