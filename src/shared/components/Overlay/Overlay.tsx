import React, { PropsWithChildren } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Backdrop, styleToken } from '@/shared';

type OverlayProps = Partial<{
  opened: boolean;
  close: () => void;
  closeOverlayClick: boolean;
  placement: 'bottom' | 'center';
}>;

const getOverlayContainerStyle = (placement: OverlayProps['placement']) => {
  switch (placement) {
    case 'bottom':
      return css`
        width: 100%;
        position: fixed;
        top: auto;
        bottom: 0;
        left: 0;
        transform: translateX(0);
      `;
    default:
      return css`
        width: auto;
        position: absolute;
        top: 50%;
        bottom: auto;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
  }
};

export const OverlayContainer = styled.div<Pick<OverlayProps, 'placement'>>`
  z-index: ${styleToken.zIndex.modal};
  ${({ placement }) => getOverlayContainerStyle(placement ?? 'center')}
`;

export const Overlay = ({ opened, close, closeOverlayClick, placement, children }: PropsWithChildren<OverlayProps>) => {
  const handleBackdropClick = () => {
    if (closeOverlayClick) {
      close?.();
    }
  };

  const handleOverlayContainerStopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return opened ? (
    <Backdrop onClick={handleBackdropClick}>
      <OverlayContainer placement={placement} onClick={handleOverlayContainerStopPropagation}>
        {children}
      </OverlayContainer>
    </Backdrop>
  ) : null;
};
