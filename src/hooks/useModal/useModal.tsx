import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ModalBackground, ModalBackgroundProps } from './ModalBackground';

function useModal(initialState = false) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (initialState) {
      setIsShow(initialState);
    }
  }, [initialState]);

  const hideModal = useCallback(() => {
    setIsShow(false);
  }, []);

  const showModal = useCallback(() => {
    setIsShow(true);
  }, []);

  const clearModalRoot = useCallback(() => {
    document.getElementById('modal-root')!.innerHTML = '';
  }, []);

  const Modal = useCallback(
    (props: React.PropsWithChildren<ModalBackgroundProps>) => {
      if (!isShow) {
        return null;
      }
      return ReactDOM.createPortal(
        <ModalBackground {...props} onBackgroundClick={props.onBackgroundClick || hideModal} />,
        document.getElementById('modal-root')!
      );
    },
    [isShow, hideModal]
  );

  return {
    Modal,
    hideModal,
    showModal,
    clearModalRoot,
  };
}

export { useModal };
