import React, { useMemo } from 'react';
import { Modal } from '../Modal';
import useVirtualNumPad from './useVirtualNumPad';
import { TVirtualNumPad } from './types';
import { getRandomNumberPad } from './VirtualNumberPad';

function VirtualNumPad({ onClick, onDimmedClick }: TVirtualNumPad) {
  const keys = useMemo(() => getRandomNumberPad(), []);
  const { handleClick } = useVirtualNumPad({ keys, onClick });

  return (
    <Modal onDimmedClick={onDimmedClick}>
      <div className="modal-number-pad" onClick={handleClick}>
        {keys.map((key) => (
          <button className="modal-button" type="button" key={key}>
            {key}
          </button>
        ))}
      </div>
    </Modal>
  );
}

export default VirtualNumPad;
