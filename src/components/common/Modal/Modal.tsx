import styled from 'styled-components';
import { ReactElement } from 'react';

interface ModalProps {
  children: ReactElement;
}

const Modal = ({ children }: ModalProps) => {
  return <Layout>{children}</Layout>;
};

export default Modal;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  z-index: 9999;
`;
