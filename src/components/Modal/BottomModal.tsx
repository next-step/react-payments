import styled from '@emotion/styled';
import React, { PropsWithChildren, cloneElement, useState } from 'react';
import { keyframes } from '@emotion/react';
import Modal from './Modal';

export interface ModalChildrenProps {
  onClose: () => void;
}

const BottomModal = ({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>) => {
  const [show, setShow] = useState(isOpen);

  const handelClickBackground = () => {
    setShow(false);
  };
  const handleTransitionStart = () => {};
  const handleTransitionEnd = () => {
    if (!show) onClose();
  };

  return (
    <Modal
      position="bottom"
      isOpen={isOpen}
      backgroundClick={handelClickBackground}
    >
      <BottomModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        show={show}
        onAnimationStart={handleTransitionStart}
        onAnimationEnd={handleTransitionEnd}
      >
        {cloneElement(children as React.ReactElement, {
          onClose: handelClickBackground,
        })}
      </BottomModalContainer>
    </Modal>
  );
};

export default BottomModal;

const BottomModalContainer = styled.div<{
  show: boolean;
}>`
  width: 375px;

  background-color: white;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;

  animation-name: ${({ show }) => (show ? openAnimation : closeAnimation)};
  padding: 34px;
`;

const openAnimation = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    `;

const closeAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;
