import styled from '@emotion/styled';
import { PropsWithChildren, useContext } from 'react';

import ModalPortal from './ModalPortal';
import ModalProvider, { ModalContext } from './ModalProvider';

import type { ModalProps } from './Modal.types';
import * as Styled from './Modal.styled';

const Modal = ({ children }: PropsWithChildren<ModalProps>) => {
  return <ModalProvider>{children}</ModalProvider>;
};

Modal.Trigger = ({ children }: PropsWithChildren) => {
  const { open } = useContext(ModalContext);

  return <div onClick={open}>{children}</div>;
};

Modal.Content = ({ children }: PropsWithChildren) => {
  const { isOpened, close } = useContext(ModalContext);

  const onCloseWithoutPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    close();
    e.stopPropagation();
  };

  return (
    <ModalPortal>
      {isOpened && (
        <>
          <Styled.Dimmer onClick={onCloseWithoutPropagation} />
          <Styled.Wrapper>
            <Styled.ModalWrapper>{children}</Styled.ModalWrapper>
          </Styled.Wrapper>
        </>
      )}
    </ModalPortal>
  );
};

export default Modal;
