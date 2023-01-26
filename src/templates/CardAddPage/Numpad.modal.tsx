import { KeyboardEvent, MouseEvent, useMemo } from 'react';
//
import { Modal } from '@/components';

type NumpadModalProps = {
  open: boolean;
  onClose: <T extends HTMLElement>(event: KeyboardEvent<T> | MouseEvent<T>) => void;
  onSelect: (keypad: string) => void;
};

const NumpadModal = ({ open, onClose, onSelect }: NumpadModalProps) => {
  const 가상_키보드 = useMemo(getVirtualKeyboard, [open]);
  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid-wrap gap-5">
        {가상_키보드.map((keypad) => (
          <div
            key={keypad}
            className="modal-item-container numpad"
            onClick={() => onSelect(keypad)}
          >
            <span className="modal-item-name numpad">{keypad}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default NumpadModal;

const getVirtualKeyboard = () => {
  const 가상_키보드 = Array.from({ length: 10 }, (_, index) => `${index}`).sort(
    () => 0.5 - Math.random(),
  );

  가상_키보드.splice(9, 0, '⬅');
  가상_키보드.push('©');

  return 가상_키보드;
};
