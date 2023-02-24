import styled from '@emotion/styled';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import Portal from './Portal';
import { keyframes } from '@emotion/react';

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
  const handleTransitionEnd = () => {
    if (!show) onClose();
  };

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  return (
    <Portal
      position="bottom"
      isOpen={isOpen}
      backgroundClick={handelClickBackground}
    >
      <BottomModalContainer
        onClick={(e) => e.preventDefault()}
        isOpen={show}
        onAnimationEnd={handleTransitionEnd}
      >
        {children}
      </BottomModalContainer>
    </Portal>
  );
};

export default BottomModal;

const BottomModalContainer = styled.div<{
  isOpen: boolean;
}>`
  width: 375px;
  height: 20%;
  background-color: white;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transform: translate(-50%, -50%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  animation-name: ${({ isOpen }) => (isOpen ? openAnimation : closeAnimation)};
  padding: 16px 24px;
`;

const openAnimation = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
    `;

const closeAnimation = keyframes`
0% {
    transform: translateY(0);
}
100% {
    transform: translateY(100%);
}
`;
