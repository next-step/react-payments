import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import ModalPortal from './ModalPortal';

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <ModalPortal>
      <Dimmer>
        <Wrapper>
          <ModalWrapper>{children}</ModalWrapper>
        </Wrapper>
      </Dimmer>
    </ModalPortal>
  );
};

export default Modal;

const Dimmer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  max-width: var(--mobile-width);
  width: 100%;
`;
