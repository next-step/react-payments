import React, { useState } from 'react';
import { Modal } from '../Modal';

type TToolTipProps = {
  children?: React.ReactNode;
};

function ToolTip({ children }: TToolTipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button type="button" onClick={handleVisibility}>
        ?
      </button>
      {isVisible && (
        <Modal onDimmedClick={handleVisibility}>
          <p style={{ padding: '24px' }}>{children}</p>
          <button type="button" onClick={handleVisibility}>
            확인
          </button>
        </Modal>
      )}
    </>
  );
}

export default ToolTip;
