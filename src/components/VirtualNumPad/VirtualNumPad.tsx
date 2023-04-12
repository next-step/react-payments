import React, { useCallback, useState } from 'react';
import { Modal } from '../Modal';
import { TModalProps } from '../Modal/Modal';

const CLICK_TRACING_DELAY = 200;
const KEYS = ['지움', 0, '초기화', 1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => String(s)).reverse();

type TVirtualNumPad = {
  onClick?: (newValue: string) => void;
} & TModalProps;

function VirtualNumPad({ onClick, onDimmedClick }: TVirtualNumPad) {
  const [buffer, setBuffer] = useState('');

  //TODO: 하나의 일만 하도록 함수 쪼개기
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      const { currentTarget: parent, target } = event;
      const childNodes = Array.from(parent?.childNodes || []);

      const index = childNodes.indexOf(target as ChildNode);
      const newValue = buffer + KEYS[index];
      setBuffer(() => newValue);
      onClick?.(newValue);

      const randomIndexes = childNodes
        .map((_, idx) => idx)
        .filter((_, idx) => idx !== index)
        .sort(() => Math.random() - 0.5);

      [index, randomIndexes[0]].forEach((idx) => {
        const node = parent?.childNodes[idx] as HTMLElement;
        node.classList.add('active');

        setTimeout(() => {
          node.classList.remove('active');
        }, CLICK_TRACING_DELAY);
      });
    },
    [buffer]
  );

  return (
    <Modal onDimmedClick={onDimmedClick}>
      <div className="modal-number-pad" onClick={handleClick}>
        {KEYS.map((key) => (
          <button className="modal-button" type="button" key={key}>
            {key}
          </button>
        ))}
      </div>
    </Modal>
  );
}

export default VirtualNumPad;
