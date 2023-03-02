import styled from '@emotion/styled';

export const Dimmer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  max-width: var(--mobile-width);
  width: 100%;
`;
