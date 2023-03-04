import React, { memo, MouseEvent, MouseEventHandler, useCallback, useEffect, useState } from 'react';

import { Portal } from '@/components/Portal';

import { ModalBackground, ModalBackgroundProps } from './ModalBackground';

const ModalWithPortal = memo((props: React.PropsWithChildren<ModalBackgroundProps>) => {
  const { onBackgroundClick } = props;

  return (
    <Portal>
      <ModalBackground {...props} onBackgroundClick={onBackgroundClick} />,
    </Portal>
  );
});

function useModal(initialState = false) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (initialState) {
      setIsShow(initialState);
    }
  }, [initialState]);

  const showModal = useCallback(() => {
    setIsShow(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsShow(false);
  }, []);

  const handleModalBackgroundClick = useCallback(
    (onBackgroundClick?: MouseEventHandler<Element>) => (e: MouseEvent<Element>) => {
      hideModal();
      onBackgroundClick?.(e);
    },
    [hideModal]
  );

  const Modal = useCallback(
    (props: React.PropsWithChildren<ModalBackgroundProps>) => {
      if (!isShow) {
        return null;
      }

      return <ModalWithPortal {...props} onBackgroundClick={handleModalBackgroundClick(props.onBackgroundClick)} />;
    },
    [isShow, handleModalBackgroundClick]
  );

  return {
    Modal,
    hideModal,
    showModal,
  };
}

export { useModal };
