import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type FlexPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
interface Type {
  children: ReactNode;
  selector?: string;
  isOpen: boolean;
  position: FlexPosition;
  backgroundClick?: () => void;
}

const flexPosition = {
  top: css`
    align-items: flex-start;
    justify-content: center;
  `,
  bottom: css`
    align-items: flex-end;
    justify-content: center;
  `,
  left: css`
    align-items: center;
    justify-content: flex-start;
  `,
  right: css`
    align-items: center;
    justify-content: flex-end;
  `,
  center: css`
    align-items: center;
    justify-content: center;
  `,
};
const Portal = ({
  children,
  isOpen,
  selector = 'modal',
  position,
  backgroundClick,
}: Type) => {
  const [element, setElement] = useState<Element | null>(null);
  useEffect(() => {
    setElement(document.getElementById(selector));
  }, [selector]);

  if (!element || !isOpen) return null;

  return ReactDOM.createPortal(
    <PortalBackground position={position} onClick={backgroundClick}>
      {children}
    </PortalBackground>,
    element
  );
};

export default Portal;

const PortalBackground = styled.div<{
  position: FlexPosition;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  ${({ position }) => flexPosition[position]}
`;
