import { type PropsWithChildren } from 'react';
import ModalPortal from '../modal-portal/ModalPortal';

type ModalProps = {
  onToggle: () => void;
  isOpen: boolean;
} & PropsWithChildren;

export const Modal = ({ onToggle, isOpen, children }: ModalProps) =>
  isOpen ? (
    <ModalPortal>
      <div className="modal-dimmed" onClick={onToggle}>
        <div
          className="modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  ) : null;
