import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type BackdropProps = PropsWithChildren<{
  onClick?: () => void;
}>;

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${styleToken.color.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${styleToken.zIndex.overlay};
  transition: opacity 1s ease;
`;

export const Backdrop = ({ children, onClick }: BackdropProps) => <Root onClick={onClick}>{children}</Root>;

Backdrop.displayName = 'Backdrop';
