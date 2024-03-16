import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { styleToken } from '@/shared';

type BackdropProps = PropsWithChildren<{
  onClick?: () => void;
}>;

const Root = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  z-index: 10;
  transition: opacity 1s ease;
  top: 0;
  left: 0;
  background-color: ${styleToken.color.shadow};
`;

export const Backdrop = ({ children, onClick }: BackdropProps) => <Root onClick={onClick}>{children}</Root>;
